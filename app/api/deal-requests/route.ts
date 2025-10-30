import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServer } from '@/app/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, areas, investorType, dealId } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    try {
      const supabase = getSupabaseServer();
      const { error } = await supabase.from('deal_requests').insert({
        name,
        email,
        phone,
        areas: areas || null,
        investor_type: investorType || null,
        deal_id: dealId || null,
        source: 'Investor Deals Page',
        created_at: new Date().toISOString(),
      });
      if (error) {
        console.error('Supabase insert error (deal_requests):', error);
      }
    } catch (e) {
      console.error('Supabase client error (deal_requests):', e);
    }

    return NextResponse.json({ ok: true, message: 'Request submitted' }, { status: 200 });
  } catch (e) {
    console.error('Deal request error:', e);
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 });
  }
}


