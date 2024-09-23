// emailUtils.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendResetPasswordEmail = async (to, resetLink) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject: 'Password Reset',
            text: `Click this link to reset your password: ${resetLink}`,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};
