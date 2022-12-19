import nodemailer from "nodemailer";

export const sendEmail = async (req, res,next) => {
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
      html: `<h4> Name: ${name} </h4> <h4> Phone: ${phone} </h4><h4> Email: ${email} </h4> <h4>Message: ${message} </h4>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error" + error);
      } else {
        // res.status(201).json({ status: 201, info });
        next()
      }
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};
