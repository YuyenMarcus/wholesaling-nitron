import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, message } = body;

    // Validate required fields
    if (!name || !phone || !address) {
      return NextResponse.json(
        { error: 'Missing required fields', ok: false },
        { status: 400 }
      );
    }

    // Log the lead
    console.log('New lead received:', {
      name,
      email: email || 'Not provided',
      phone,
      address,
      message: message || 'Not provided',
      timestamp: new Date().toISOString(),
    });

    // Send to Google Sheets webhook if configured
    const webhookUrl = process.env.LEADS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const webhookPayload = {
          name,
          phone,
          address,
          email: email || '',
          message: message || '',
          timestamp: new Date().toISOString(),
          source: 'Nitron Digital Wholesaling Website',
        };

        console.log('Sending to webhook:', webhookUrl);
        
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload),
          redirect: 'follow', // Important for Google Apps Script
        });

        const webhookText = await webhookResponse.text();
        console.log('Webhook response:', webhookText);

        if (!webhookResponse.ok) {
          console.error('Webhook returned error:', webhookResponse.status);
          // Don't fail the request if webhook fails
        }
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Don't fail the request if webhook fails
      }
    } else {
      console.warn('No LEADS_WEBHOOK_URL configured in environment variables');
    }

    // TODO: Additional CRM integrations
    // Examples:
    // - HubSpot API
    // - Salesforce API
    // - SendGrid for email notifications
    // - Custom database

    return NextResponse.json(
      {
        success: true,
        ok: true,
        message: 'Lead submitted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error', ok: false },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve leads (add authentication!)
export async function GET() {
  return NextResponse.json(
    { 
      message: 'Leads API - Use POST to submit a lead',
      requiredFields: ['name', 'phone', 'address'],
      optionalFields: ['email', 'message'],
    },
    { status: 200 }
  );
}


