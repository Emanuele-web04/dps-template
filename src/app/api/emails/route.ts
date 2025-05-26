import { Resend } from 'resend';
import WaitlistEmailTemplate from '../../../../emails/WaitlistEmailTemplate';
import { NextResponse } from 'next/server';
import { INSERT, checkIfEmailAlreadyExists } from '@/lib/supabase';


export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email } = await req.json()

  try {
    const exists = await checkIfEmailAlreadyExists(email)
    if (exists) {
      return NextResponse.json(
        { error: 'Email already subscribed to waitlist' }, 
        { status: 409 } // 409 Conflict
      );
    }
    await INSERT(email);

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Hello world',
      react: WaitlistEmailTemplate({ email }),
    });

    if (error) {
      return NextResponse.json(error);
    }
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}