// pages/api/contact.js
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, services, message } = req.body;

    try {
      // Get an access token
      const accessToken = await oAuth2Client.getAccessToken();

      // Create Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // Use 465 for secure connections
        secure: true, // Use SSL
        auth: {
          type: 'OAuth2',
          user: 'ahzutech@gmail.com', // Your Gmail address
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken.token,
        },
      });

      // Send email
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: 'cycoserve@gmail.com', // Replace with the recipient's email address
        subject: `New Contact Form Submission: ${services}`,
        text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${services}\nMessage: ${message}`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
