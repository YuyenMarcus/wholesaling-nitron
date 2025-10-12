import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the country from Vercel's geolocation headers
  const country = (request as any).geo?.country || request.headers.get('x-vercel-ip-country');
  
  // Allow access only from United States
  if (country && country !== 'US') {
    // Return a 403 Forbidden response with a custom message
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Access Restricted</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .container {
            text-align: center;
            padding: 2rem;
            max-width: 600px;
          }
          h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          p {
            font-size: 1.2rem;
            line-height: 1.6;
          }
          .emoji {
            font-size: 4rem;
            margin-bottom: 1rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="emoji">🌎</div>
          <h1>Access Restricted</h1>
          <p>This website is only available to visitors from the United States.</p>
          <p>We currently only serve properties in New Hampshire, USA.</p>
        </div>
      </body>
      </html>
      `,
      {
        status: 403,
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  }

  // Allow the request to continue for US visitors
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};

