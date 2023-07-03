const argon2 = require("argon2");
require("dotenv").config();

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.mot_de_passe, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      console.warn("hashedPassword: ", hashedPassword);
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// const verifyPassword = (req, res) => {
//   const storedPassword = req.utilisateur && req.utilisateur.mot_de_passe; // Vérifier si req.user et req.user.mdp sont définis

//   if (!storedPassword) {
//     res.status(401).send("Authentication failed");
//     return;
//   }

//   argon2
//     .verify(storedPassword, req.body.mot_de_passe)
//     .then((passwordMatch) => {
//       if (passwordMatch) {
//         res.status(200).send("Authentication verified");
//       } else {
//         res.status(401).send("Authentication failed");
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

module.exports = {
  hashPassword,
  //   verifyPassword,
};
