// Import nodemailer module
import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
        user: 'benzak@gmail.com', // Your email address
        pass: 'ommb sjay nddy rjgq'   // Your email password
    }
});

// Function to send email
const sendEmail = (formData) => {
    const mailOptions = {
        from: formData.email,
        to: 'benzak@gmail.com',
        subject: 'New Form Submission',
        text: `You have a new form submission with the following details:
        Name: ${formData.name}
        Email: ${formData.email}
        Company: ${formData.company}
        Phone: ${formData.phone}
        Comments: ${formData.comments}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        console.log('Message sent: %s', info.messageId);
    });
};

export default sendEmail;