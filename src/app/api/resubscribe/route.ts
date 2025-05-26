import { NextResponse } from "next/server";
import { resend } from "../emails/route";
import { INSERT, checkIfEmailAlreadyExists } from "@/lib/supabase";
import WaitlistEmailTemplate from "../../../../emails/WaitlistEmailTemplate";
import ResubscribeEmailTemplate from "../../../../emails/ResubscribeEmailTemplate";

export async function POST(req: Request) {
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
        subject: 'Welcome Back!',
        react: ResubscribeEmailTemplate({ email }),
      });
  
      if (error) {
        return NextResponse.json(error);
      }
      
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }