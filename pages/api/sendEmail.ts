import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

interface ContactFormRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { name, email, subject, message }: ContactFormRequestBody = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Sending to a predefined admin email address
    const adminEmail = process.env.ADMIN_EMAIL as string;

    await sendgrid.send({
        to: adminEmail,
        from: {
          email: process.env.SENDER_EMAIL as string, // The verified sender email
          name: 'CycoServe Contact Form', // The desired sender name
        },
        subject: `${subject} (From ${name})`,
        text: `Message from: ${name} <${email}>\n\n${message}`,
      });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('SendGrid Error:', error);
    return res.status(500).json({
      error: 'Failed to send message',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
