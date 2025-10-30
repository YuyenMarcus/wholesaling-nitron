import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client. Requires SERVICE ROLE key.
// Do NOT expose SERVICE ROLE key to the browser.
export function getSupabaseServer() {
  const supabaseUrl = process.env.SUPABASE_URL as string | undefined;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}


