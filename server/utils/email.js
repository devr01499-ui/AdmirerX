const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send contact form email to admin
const sendContactEmail = async (contactData) => {
  const { name, email, company, phone, message, service } = contactData;
  
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL || 'admin@admirerx.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0046FF;">New Contact Form Submission</h2>
        
        <div style="background-color: #f5f6fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2E2E2E; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Service Interest:</strong> ${service}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #0046FF; margin: 20px 0;">
          <h3 style="color: #2E2E2E; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #6E6E6E;">${message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f5f6fa; border-radius: 8px;">
          <p style="color: #6E6E6E; margin: 0;">This message was sent from the AdmirerX website contact form.</p>
          <p style="color: #6E6E6E; margin: 5px 0 0 0;">Reply directly to this email to respond to the customer.</p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

// Send confirmation email to customer
const sendConfirmationEmail = async (contactData) => {
  const { name, email } = contactData;
  
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting AdmirerX',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0046FF;">Thank you for contacting AdmirerX!</h2>
        
        <p>Dear ${name},</p>
        
        <p>Thank you for reaching out to us. We have received your message and our team will review it shortly.</p>
        
        <p>We typically respond to all inquiries within 24 hours during business days.</p>
        
        <div style="background-color: #f5f6fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2E2E2E; margin-top: 0;">What happens next?</h3>
          <ul style="color: #6E6E6E;">
            <li>Our team will review your requirements</li>
            <li>We'll prepare a customized proposal for your business</li>
            <li>We'll schedule a call to discuss your needs in detail</li>
          </ul>
        </div>
        
        <p>If you have any urgent questions, please don't hesitate to call us directly.</p>
        
        <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #0046FF; color: white; border-radius: 8px;">
          <h3 style="margin-top: 0;">Ready to transform your business?</h3>
          <p style="margin-bottom: 0;">Let's build success together!</p>
        </div>
        
        <p style="text-align: center; color: #6E6E6E; margin-top: 20px;">
          Best regards,<br>
          The AdmirerX Team
        </p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};

module.exports = {
  sendContactEmail,
  sendConfirmationEmail
};
