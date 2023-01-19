import nodemailer from "nodemailer";

export const sendEmail = async (req, res, next) => {
  const { name, phone, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hammadlucidwebdev@gmail.com",
        pass: "amtezjttjnvbgblt",
      },
    });

    const mailOptions = {
      from: email,
      to: "hammadlucidwebdev@gmail.com",
      subject: "Message from Alpha web shop",
      html: `<h3> Name: ${name} </h3><h3> Phone: ${phone} </h3><h3> Email: ${email} </h3> <h3>Message:</h3> <p>${message}</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error" + error);
      } else {
        next();
      }
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};
