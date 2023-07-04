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
    .hash("req.body.mot_de_passe", hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.mot_de_passe;
      console.warn("hashedPassword: ", hashedPassword);

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// const verifyPassword = (req, res) => {
//   console.log(req.utilisateur)
//   argon2
//     .verify(req.utilisateur.mot_de_passe, req.body.mot_de_passe)
//     .then((isVerified) => {
//       if (isVerified) {
//         res.send("Credentials are valid");
//       } else {
//         res.sendStatus(401);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

module.exports = {
  hashPassword,
  // verifyPassword,
};
