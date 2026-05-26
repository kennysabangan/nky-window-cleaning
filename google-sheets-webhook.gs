// Google Apps Script for NKY Niche Sites Form Submissions
// Deploy this as a web app to get a POST endpoint for form submissions
// Instructions:
// 1. Create a new Google Sheet
// 2. Go to Extensions → Apps Script
// 3. Paste this code
// 4. Deploy → New deployment → Web app
// 5. Set "Execute as" to "Me" and "Who has access" to "Anyone"
// 6. Copy the deployment URL — use it as the form webhook

function doPost(e) {
  try {
    const params = JSON.parse(e.postData.contents);
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    let targetSheet = sheet.getSheetByName(params.site_name || 'Leads');
    
    // Create sheet for this site if it doesn't exist
    if (!targetSheet) {
      targetSheet = sheet.insertSheet(params.site_name || 'Leads');
      // Add headers
      targetSheet.appendRow([
        'Timestamp',
        'Site',
        'First Name',
        'Last Name',
        'Phone',
        'Email',
        'Comment',
        'Page Path',
        'Status'
      ]);
      // Format header row
      const headerRange = targetSheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#1a6bb5');
      headerRange.setFontColor('#ffffff');
      targetSheet.setFrozenRows(1);
    }
    
    // Add the lead
    targetSheet.appendRow([
      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
      params.site_name || '',
      params.first_name || '',
      params.last_name || '',
      params.phone || '',
      params.email || '',
      params.comment || '',
      params.page_path || '',
      'New'
    ]);
    
    // Also add to "All Leads" sheet
    let allSheet = sheet.getSheetByName('All Leads');
    if (!allSheet) {
      allSheet = sheet.insertSheet('All Leads');
      allSheet.appendRow([
        'Timestamp',
        'Site',
        'First Name',
        'Last Name',
        'Phone',
        'Email',
        'Comment',
        'Page Path',
        'Status'
      ]);
      const headerRange = allSheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#1a6bb5');
      headerRange.setFontColor('#ffffff');
      allSheet.setFrozenRows(1);
    }
    
    allSheet.appendRow([
      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
      params.site_name || '',
      params.first_name || '',
      params.last_name || '',
      params.phone || '',
      params.email || '',
      params.comment || '',
      params.page_path || '',
      'New'
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Form endpoint is live' }))
    .setMimeType(ContentService.MimeType.JSON);
}
