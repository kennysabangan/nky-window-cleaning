import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { site_name, first_name, last_name, phone, email, comment, page_path } = req.body;

  if (!first_name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const fullName = `${first_name} ${last_name}`.trim();
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  try {
    await resend.emails.send({
      from: `NKY Window Cleaning Pros <lead@scalesolving.com>`,
      to: ['hello@scalesolving.com'],
      subject: `New Lead: ${fullName}` + (page_path && page_path !== '/' ? ` — ${page_path}` : '\),
      html: `<h2>New Lead from NKY Window Cleaning Pros</h2>
<p><strong>Name:</strong> ${fullName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Message:</strong> ${comment || 'No message'}</p>
<p><strong>Page:</strong> ${page_path || 'Unknown'}</p>
<p><strong>Time:</strong> ${timestamp}</p>`,
    });
  } catch (error: any) {
    console.error('Resend error (owner):', error);
  }

  try {
    await resend.emails.send({
      from: `NKY Window Cleaning Pros <lead@scalesolving.com>`,
      to: [email],
      subject: `Thanks ${first_name}! We received your quote request`,
      html: `<h2>Thanks for reaching out, ${first_name}!</h2>
<p>We received your quote request for <strong>NKY Window Cleaning Pros</strong> and will get back to you shortly.</p>
<p>If you need immediate assistance, call us at <strong>(859) 900-8065</strong>.</p>
<p>— The NKY Window Cleaning Pros Team</p>`,
    });
  } catch (error: any) {
    console.error('Resend error (customer):', error);
  }

  return res.status(200).json({ ok: true });
}
