import { Resend } from 'resend';
import WaitlistEmailTemplate from '../../../../emails/WaitlistEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {

    const { email, userFirstName } = await req.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Hello world',
      react: WaitlistEmailTemplate({ name: userFirstName }),
    });

    if (error) {
      return Response.json(error);
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}