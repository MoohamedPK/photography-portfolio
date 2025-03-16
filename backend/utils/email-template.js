const emailTemplate = (userName, sessionDate) => `
  <html>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; text-align: center;">
      <div style="max-width: 600px; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); margin: auto;">
        <h2 style="color: #333;">Photography Session Confirmation</h2>
        <p style="font-size: 18px; color: #555;">Hello <strong>${userName}</strong>,</p>
        <p style="font-size: 16px; color: #555;">This is a friendly reminder about your upcoming photo session scheduled for <strong>${sessionDate}</strong>.</p>
        <p style="font-size: 16px; color: #555;">I'am excited to capture amazing moments with you! If you have any special requests, feel free to let me know.</p>
        <p style="font-size: 14px; color: #777; margin-top: 20px;">Need to reschedule? Contact me as soon as possible.</p>
      </div>
    </body>
  </html>
`;

export default emailTemplate;
