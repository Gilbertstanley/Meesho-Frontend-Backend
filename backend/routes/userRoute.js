/* import express from 'express';
import { loginUser,registerUser,adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter; */



/////////////////////////////////////////////

/* import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto'; // For generating tokens
import User from '../models/userModel.js'; // Adjust based on your user model
import validator from 'validator'; // For validating email format

const userRouter = express.Router();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // or any other email service
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
});

// User registration route
userRouter.post('/register', registerUser);

// User login route
userRouter.post('/login', loginUser);

// Admin login route
userRouter.post('/admin', adminLogin);

// Forgot Password Route
userRouter.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Generate a reset token and save it to the user model
        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetToken = resetToken; // Save this token in your user model

        // Set token expiration (e.g., 1 hour)
        user.resetTokenExpiration = Date.now() + 3600000; // 1 hour in milliseconds
        await user.save();

        // Send email with reset link
        const resetLink = `http://localhost:3000/reset-password/${resetToken}`; // Updated to use your local frontend URL

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset',
            text: `Click this link to reset your password: ${resetLink}`,
        });

        res.status(200).json({ success: true, message: 'Reset link sent to your email' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

export default userRouter;
 */

/* import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto'; // For generating tokens
import bcrypt from 'bcrypt'; // For hashing the new password
import User from '../models/userModel.js'; // Adjust based on your user model
import validator from 'validator'; // For validating email format

const userRouter = express.Router();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // or any other email service
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
});

// Existing Routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

// Forgot Password Route
userRouter.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Generate a reset token and hash it before saving
        const resetToken = crypto.randomBytes(32).toString('hex');
        const hashedResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');

        // Save the hashed token and expiration to the user model
        user.resetToken = hashedResetToken;
        user.resetTokenExpiration = Date.now() + 3600000; // 1 hour expiration
        await user.save();

        // Send email with reset link containing the plain reset token
        const resetLink = `http://localhost:3000/reset-password/${resetToken}`; // Your frontend URL

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset',
            text: `Click this link to reset your password: ${resetLink}`,
        });

        res.status(200).json({ success: true, message: 'Reset link sent to your email' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Reset Password Route (paste this code here)
userRouter.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        // Hash the token provided by the user to compare with the stored hash
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        // Find user by reset token and ensure the token hasn't expired
        const user = await User.findOne({
            resetToken: hashedToken,
            resetTokenExpiration: { $gt: Date.now() }, // Check expiration
        });

        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid or expired token' });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update user's password and clear the reset token and expiration
        user.password = hashedPassword;
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;

        // Save the updated user
        await user.save();

        res.status(200).json({ success: true, message: 'Password successfully reset' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

export default userRouter; */


///////////////////// after 2 step .1


/* import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';
import { sendResetPasswordEmail } from '../utils/emailUtils.js'
import crypto from 'crypto';
import User from '../models/userModel.js';
import validator from 'validator';

const userRouter = express.Router();

// User registration route
userRouter.post('/register', registerUser);

// User login route
userRouter.post('/login', loginUser);

// Admin login route
userRouter.post('/admin', adminLogin);

// Forgot Password Route
userRouter.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
        await user.save();

        const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
        
        // Use the email utility function to send the reset email
        await sendResetPasswordEmail(email, resetLink);

        res.status(200).json({ success: true, message: 'Reset link sent to your email' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

export default userRouter; */


///////////////////// after 2 step


/* import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';
import { sendResetPasswordEmail } from '../utils/emailUtils.js';
import crypto from 'crypto';
import User from '../models/userModel.js';
import validator from 'validator';

const userRouter = express.Router();

// User registration route
userRouter.post('/register', registerUser);

// User login route
userRouter.post('/login', loginUser);

// Admin login route
userRouter.post('/admin', adminLogin);

// Forgot Password Route
userRouter.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    console.log('Reset password request received:', { token, newPassword });

    try {
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
        await user.save();

        const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
        
        // Use the email utility function to send the reset email
        await sendResetPasswordEmail(email, resetLink);

        res.status(200).json({ success: true, message: 'Reset link sent to your email' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Reset Password Route
userRouter.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() } // Ensure token is not expired
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired token' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();

    res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default userRouter; */




//////////////////////////    2nd error



import express from 'express';
import bcrypt from 'bcryptjs'; // Added import for bcrypt
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';
import { sendResetPasswordEmail } from '../utils/emailUtils.js';
import crypto from 'crypto';
import User from '../models/userModel.js';
import validator from 'validator';

const userRouter = express.Router();

// User registration route
userRouter.post('/register', registerUser);

// User login route
userRouter.post('/login', loginUser);

// Admin login route
userRouter.post('/admin', adminLogin);

// Forgot Password Route
userRouter.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
        await user.save();

        const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
        
        // Use the email utility function to send the reset email
        await sendResetPasswordEmail(email, resetLink);

        res.status(200).json({ success: true, message: 'Reset link sent to your email' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Reset Password Route
userRouter.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() } // Ensure token is not expired
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired token' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();

    res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default userRouter;
