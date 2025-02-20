
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import { GiMailShirt } from 'react-icons/gi';

export async function POST(req) {
    const { name,email, phone, message, services } = await req.json();

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true, // true for port 465, false for other ports
        port: 465,
        auth: {
            user: "qshahzaibahmed@gmail.com",
            pass: "irho mgix icod jzme",
  },
});

    // Set up email data
    const mailOptions = {
        from: "qshahzabahmed@gmail.com", // sender address
        to: "naved@tech-kun.com", // list of receivers
        subject: `New message from ${name}`, // Subject line
        text: `Message: ${message}\nPhone: ${phone}\nEmail: ${email}\nServices: ${services.join(', ')}`, // plain text body
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, msg: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, msg: 'Failed to send email.' }, { status: 500 });
    }
}