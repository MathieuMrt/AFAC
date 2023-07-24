const nodemailer = require("nodemailer");
require("dotenv").config();
const models = require("../models");

const sendContactMail = async (req, res) => {
  const { email } = req.body;

  try {
    const [userId] = await models.utilisateur.getUserByLogin({ mail: email });
    // Récupére l'ID correspondant à l'e-mail à partir de la base de données

    if (userId === []) {
      return res.status(404).send("aucun utilisateur trouvé");
    }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SENDIN,
      port: process.env.SMTP_PORT_SENDIN,
      secure: false,
      auth: {
        user: process.env.SMTP_SENDIN_USER,
        pass: process.env.SMTP_SENDIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: "contact@afac974.com",
      to: email,
      sujet: "Voici le lien qui permet de réinitialiser votre mot de passe",
      texte: `Email : ${email}`,
      html: `<p>Suite à votre demande, voici le lien qui permet de réinitialiser votre mot de passe :</p>
               </br>
               <p>http://localhost:3000/resetmotdepasse/${userId[0].id}</p>`,
    };

    const error = await transporter.sendMail(mailOptions);
    if (error) {
      console.error(error);
      return res.status(500).send("Quelque chose a mal tourné");
    }
    return res.status(200).send("Message envoyé");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Quelque chose a mal tourné");
  }
};

module.exports = {
  sendContactMail,
};
