import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest) => {
  const { email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ message: 'Email and message are required' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'hashim00541x@gmail.com',
    subject: `New message from ${email}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ message: 'Failed to send message', error }, { status: 500 });
  }
};
