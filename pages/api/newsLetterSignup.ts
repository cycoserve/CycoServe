import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

interface NewsletterSignupRequestBody {
  email: string;
}

export default async function newsLetterSignup(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { email }: NewsletterSignupRequestBody = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    // Sending to a predefined admin email address
    const adminEmail = process.env.ADMIN_EMAIL as string;

    await sendgrid.send({
      to: adminEmail,
      from: {
        email: process.env.SENDER_EMAIL as string, // The verified sender email
        name: 'CycoServe Newsletter', // The desired sender name
      },
      subject: 'New Newsletter Signup',
      text: `New subscriber: ${email}`,
    });

    return res.status(200).json({ message: 'Subscription notification sent successfully!' });
  } catch (error) {
    console.error('SendGrid Error:', error);
    return res.status(500).json({
      error: 'Failed to send subscription notification',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
