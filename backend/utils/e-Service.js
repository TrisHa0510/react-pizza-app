const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendLowStockEmail = async (item, quantity) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `Low Stock Alert: ${item}`,
    text: `Stock for ${item} is low. Remaining quantity: ${quantity}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Low stock email sent for ${item}`);
  } catch (error) {
    console.error('Email error:', error);
  }
};
