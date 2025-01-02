import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER || 'benzak@gmail.com',
                pass: process.env.GMAIL_APP_PASSWORD || 'ommb sjay nddy rjgq'
            }
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'benzak@gmail.com',
            subject: 'New Form Submission',
            text: `You have a new form submission with the following details:
            Name: ${formData.name}
            Email: ${formData.email}
            Company: ${formData.company}
            Phone: ${formData.phone}§
            Comments: ${formData.comments}`
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Failed to send email: ${error.message}` });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}