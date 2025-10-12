# Google Sheets Lead Integration Setup Guide

## 📊 Complete Step-by-Step Setup

### Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it **"Nitron Digital - Leads"**
4. In **Row 1**, add these headers:

```
| Timestamp | Name | Phone | Address | Email | Message | Source |
```

### Step 2: Set Up Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this script:

```javascript
function doPost(e) {
  try {
    // Get the active sheet (first sheet)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Append a new row with the lead data
    sheet.appendRow([
      new Date(),              // Timestamp
      data.name || '',         // Name
      data.phone || '',        // Phone
      data.address || '',      // Address
      data.email || '',        // Email (optional)
      data.message || '',      // Message (optional)
      data.source || 'Website' // Source
    ]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success', row: sheet.getLastRow() })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        phone: '555-555-5555',
        address: '123 Test St, Rochester NH',
        email: 'test@example.com',
        message: 'This is a test',
        source: 'Test',
        timestamp: new Date().toISOString()
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Click the **Save** icon (💾) or `Ctrl+S`
5. Name your project **"Lead Webhook"**

### Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure deployment:
   - **Description**: "Lead Capture Webhook v1"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. **Authorize access**:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to Lead Webhook (unsafe)"
   - Click "Allow"
7. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

### Step 4: Add to Environment Variables

#### Local Development (.env.local)

Create or update `wholesaling-site/.env.local`:

```bash
LEADS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

**Important:** Replace `YOUR_DEPLOYMENT_ID` with your actual deployment ID!

#### Vercel Production

1. Go to your Vercel project
2. Navigate to **Settings** → **Environment Variables**
3. Add new variable:
   - **Key**: `LEADS_WEBHOOK_URL`
   - **Value**: Your Google Apps Script web app URL
   - **Environment**: Production (and Preview if needed)
4. Click **Save**
5. **Redeploy** your site for changes to take effect

### Step 5: Test the Integration

#### Test Locally

1. Start your dev server:
```bash
cd wholesaling-site
npm run dev
```

2. Visit `http://localhost:3000`
3. Fill out the hero form with test data
4. Submit the form
5. Check your Google Sheet - you should see a new row!

#### Test in Production

1. Deploy to Vercel
2. Visit your production URL
3. Submit a test lead
4. Verify it appears in Google Sheets

## 🎨 Customizing the Sheet

### Add Conditional Formatting

1. Select the **Timestamp** column
2. Format → Number → Date time
3. Select the **Source** column
4. Format → Conditional formatting
5. Set rules for different colors based on source

### Add Data Validation

1. Click on cell **B2** (Name column)
2. Data → Data validation
3. Criteria: "Text" → "Is not empty"
4. Apply to entire column

### Create Auto-Responses (Advanced)

Add this to your Apps Script to send auto-reply emails:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = JSON.parse(e.postData.contents);
  
  // Append row
  sheet.appendRow([
    new Date(),
    data.name,
    data.phone,
    data.address,
    data.email,
    data.message,
    data.source
  ]);
  
  // Send auto-reply email (if email provided)
  if (data.email) {
    MailApp.sendEmail({
      to: data.email,
      subject: 'We Received Your Request - Nitron Digital',
      body: `Hi ${data.name},\n\nThank you for your interest! We received your request and will contact you within 24 hours.\n\nProperty: ${data.address}\n\nBest regards,\nNitron Digital Team`
    });
  }
  
  return ContentService.createTextOutput(
    JSON.stringify({ result: 'success' })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

## 📧 Email Notifications

### Get Notified for New Leads

1. In Google Sheets, click **Tools** → **Notification rules**
2. Choose:
   - **Notify me when**: "Any changes are made"
   - **Notify me with**: "Email - right away"
3. Click **Save**

### Advanced: Slack Notifications

Add this to your Apps Script:

```javascript
function notifySlack(data) {
  const webhookUrl = 'YOUR_SLACK_WEBHOOK_URL';
  
  const payload = {
    text: `🏠 New Lead Received!`,
    attachments: [{
      color: '#0077FF',
      fields: [
        { title: 'Name', value: data.name, short: true },
        { title: 'Phone', value: data.phone, short: true },
        { title: 'Address', value: data.address, short: false },
      ]
    }]
  };
  
  UrlFetchApp.fetch(webhookUrl, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  });
}

// Call in doPost()
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  // ... append to sheet ...
  notifySlack(data);
  // ... return response ...
}
```

## 🔍 Troubleshooting

### "Webhook not receiving data"

1. Check the deployment URL is correct in `.env.local`
2. Verify "Who has access" is set to **Anyone**
3. Check browser console for errors
4. Test the Apps Script directly with `testDoPost()`

### "Authorization required"

1. Redeploy the web app
2. Go through authorization flow again
3. Make sure you clicked "Allow" for all permissions

### "Data not appearing in sheet"

1. Check sheet name is exactly **"Sheet1"**
2. Verify column headers match
3. Check Apps Script logs: View → Logs
4. Test with `testDoPost()` function

### "CORS errors"

Google Apps Script handles CORS automatically when deployed as web app. If you see CORS errors:
1. Make sure you're using the `/exec` URL (not `/dev`)
2. Verify deployment is set to "Anyone" access

## 📊 Analyzing Your Leads

### Create a Dashboard

1. Create a new sheet named "Dashboard"
2. Add formulas:

```excel
// Total Leads
=COUNTA(Sheet1!A:A)-1

// Leads Today
=COUNTIF(Sheet1!A:A, TODAY())

// Leads This Week
=COUNTIF(Sheet1!A:A, ">="&TODAY()-7)

// Most Common Source
=MODE(Sheet1!G:G)
```

3. Insert charts for visualization

### Export Data

1. File → Download → CSV or Excel
2. Use for CRM import or analysis

## 🚀 Advanced Features

### Auto-Delete Test Leads

```javascript
function cleanupTestLeads() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = sheet.getDataRange().getValues();
  
  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][1].includes('Test') || data[i][2].includes('555-555')) {
      sheet.deleteRow(i + 1);
    }
  }
}
```

### Daily Summary Email

```javascript
function sendDailySummary() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const today = new Date();
  const data = sheet.getDataRange().getValues();
  
  let todayLeads = data.filter(row => {
    const rowDate = new Date(row[0]);
    return rowDate.toDateString() === today.toDateString();
  });
  
  const summary = `Daily Lead Summary\nTotal leads today: ${todayLeads.length}\n\n${
    todayLeads.map(lead => `${lead[1]} - ${lead[2]}`).join('\n')
  }`;
  
  MailApp.sendEmail('your@email.com', 'Daily Lead Summary', summary);
}

// Set up trigger: Edit → Current project's triggers → Add trigger
// Function: sendDailySummary
// Event: Time-driven, Day timer, 5pm-6pm
```

## 📞 Support

If you need help:
1. Check Apps Script execution logs
2. Test with the `testDoPost()` function
3. Verify environment variables are set
4. Check Google Sheet permissions

---

**Pro Tip:** Set up a separate "Test Leads" sheet for testing without cluttering your main data!


