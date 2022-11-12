import nodemailer from "nodemailer";


  const sendEmail =async (options)=>
{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
 port: 465,
      // service : "gmail",
       secure:true,
        auth:{
            user : "fanam6500@gmail.com",
            pass: "ncwkvjiqucywuxfd",
        },
    });
    const mailoption = {
        from : "fanam6500@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message,
    };
    await transporter.sendMail(mailoption);
};
export default sendEmail;