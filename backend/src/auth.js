const argon2 = require("@node-rs/argon2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;
      console.warn("hashedPassword: ", hashedPassword);

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.utilisateur.hashedPassword, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        delete req.utilisateur.hashedPassword;
        const payload = { utilisateur: req.utilisateur };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.status(200).send({ token, utilisateur: req.utilisateur });
      }
      // return res.status(400).send("wrong password")
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send("wrong password");
    });
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) {
      throw new Error("Authorization header is missing");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header has an incorrect type");
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.payload = payload;
    next();
  } catch (err) {
    console.error(err);
    if (err.name === "JsonWebTokenError") {
      res.status(401).send("verifytoken, Invalid token");
    } else if (err.name === "TokenExpiredError") {
      res.status(401).send("verifytoken, Token has expired");
    } else {
      res.status(401).send("verifytoken error, unauthorized");
    }
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
