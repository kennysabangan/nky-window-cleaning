import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

function buildEmailHtml(data: {
  siteName: string;
  fullName: string;
  email: string;
  phone: string;
  comment: string;
  pagePath: string;
  timestamp: string;
}) {
  const { siteName, fullName, email, phone, comment, pagePath, timestamp } = data;

  const pathMatch = pagePath.match(/\/window-cleaning\/([^/]+)/);
  const citySlug = pathMatch ? pathMatch[1] : null;
  const cityDisplay = citySlug
    ? citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : null;
  const isHomePage = !citySlug || pagePath === '/';
  const sourceLabel = isHomePage ? 'Homepage' : `${cityDisplay} — Window Cleaning`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead — ${siteName}</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <tr>
      <td style="padding:32px 24px 0;">
        <!-- Header -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#2d6a4f 0%,#40916c 100%);border-radius:12px 12px 0 0;">
          <tr>
            <td style="padding:28px 32px;text-align:center;">
              <div style="font-size:28px;margin-bottom:4px;">🪟</div>
              <div style="color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">${siteName}</div>
              <div style="color:#b7e4c7;font-size:13px;margin-top:4px;">New Lead Notification</div>
            </td>
          </tr>
        </table>

        <!-- Source Badge -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1b4332;">
          <tr>
            <td style="padding:12px 32px;text-align:center;">
              <span style="display:inline-block;background:#52b788;color:#ffffff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;padding:5px 14px;border-radius:20px;">
                📍 ${sourceLabel}
              </span>
            </td>
          </tr>
        </table>

        <!-- Lead Details Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #d8e2dc;border-top:none;">
          <tr>
            <td style="padding:28px 32px;">
              <div style="font-size:14px;font-weight:600;color:#2d6a4f;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;">Lead Details</div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f4f8;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="32" style="vertical-align:top;padding-top:2px;">
                          <div style="width:32px;height:32px;background:#d8f3dc;border-radius:8px;text-align:center;line-height:32px;font-size:14px;">👤</div>
                        </td>
                        <td style="padding-left:12px;">
                          <div style="font-size:11px;color:#748c7e;text-transform:uppercase;letter-spacing:0.5px;">Name</div>
                          <div style="font-size:16px;color:#1b4332;font-weight:600;margin-top:2px;">${fullName}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f4f8;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="32" style="vertical-align:top;padding-top:2px;">
                          <div style="width:32px;height:32px;background:#d8f3dc;border-radius:8px;text-align:center;line-height:32px;font-size:14px;">📧</div>
                        </td>
                        <td style="padding-left:12px;">
                          <div style="font-size:11px;color:#748c7e;text-transform:uppercase;letter-spacing:0.5px;">Email</div>
                          <div style="font-size:15px;color:#1b4332;font-weight:500;margin-top:2px;">${email}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f4f8;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="32" style="vertical-align:top;padding-top:2px;">
                          <div style="width:32px;height:32px;background:#d8f3dc;border-radius:8px;text-align:center;line-height:32px;font-size:14px;">📱</div>
                        </td>
                        <td style="padding-left:12px;">
                          <div style="font-size:11px;color:#748c7e;text-transform:uppercase;letter-spacing:0.5px;">Phone</div>
                          <div style="font-size:15px;color:#1b4332;font-weight:500;margin-top:2px;">${phone || '<span style="color:#a3b18a;font-style:italic;">Not provided</span>'}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="32" style="vertical-align:top;padding-top:2px;">
                          <div style="width:32px;height:32px;background:#d8f3dc;border-radius:8px;text-align:center;line-height:32px;font-size:14px;">💬</div>
                        </td>
                        <td style="padding-left:12px;">
                          <div style="font-size:11px;color:#748c7e;text-transform:uppercase;letter-spacing:0.5px;">Message</div>
                          <div style="font-size:14px;color:#1b4332;font-weight:500;margin-top:2px;line-height:1.5;">${comment || '<span style="color:#a3b18a;font-style:italic;">No message</span>'}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Meta Info -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f9f8;border:1px solid #d8e2dc;border-top:none;border-radius:0 0 12px 12px;">
          <tr>
            <td style="padding:16px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:12px;color:#748c7e;">
                    🕐 ${timestamp}
                  </td>
                  <td style="text-align:right;font-size:12px;color:#748c7e;">
                    🌐 ${pagePath}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- CTA Button -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:24px 32px;text-align:center;">
              <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#2d6a4f,#40916c);color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:14px 36px;border-radius:8px;letter-spacing:0.3px;">Reply to ${fullName.split(' ')[0]}</a>
            </td>
          </tr>
        </table>

        <!-- Footer -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:0 32px 32px;text-align:center;">
              <div style="font-size:11px;color:#a3b18a;line-height:1.6;">
                This lead was submitted through your website<br>
                <strong style="color:#52b788;">${siteName}</strong>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

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

  const html = buildEmailHtml({
    siteName: site_name || 'Window Cleaning',
    fullName,
    email,
    phone: phone || '',
    comment: comment || '',
    pagePath: page_path || 'Unknown',
    timestamp,
  });

  try {
    await resend.emails.send({
      from: 'NKY Window Cleaning Alerts <alerts@mursenmaintenance.com>',
      to: ['hello@scalesolving.com'],
      subject: '🪟 New Lead: ' + fullName + (page_path && page_path !== '/' ? ' — ' + page_path : ''),
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send notification' });
  }
}
