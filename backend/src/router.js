const express = require("express");

const router = express.Router();

const oeuvreControllers = require("./controllers/oeuvreControllers");
const utilisateurControllers = require("./controllers/utilisateurControllers");

const { hashPassword } = require("./auth");
//  verifyPassword
router.get("/oeuvres", oeuvreControllers.browse);
router.get("/oeuvres/:id", oeuvreControllers.read);
router.put("/oeuvres/:id", oeuvreControllers.edit);
router.post("/oeuvres", oeuvreControllers.add);
router.delete("/oeuvres/:id", oeuvreControllers.destroy);

router.get("/utilisateurs", utilisateurControllers.browse); // OK
router.get("/utilisateurs/:id", utilisateurControllers.read); // OK
router.put("/utilisateurs/:id", utilisateurControllers.edit);
router.delete("/utilisateurs/:id", utilisateurControllers.destroy);

// router.post(
//   "/login",
//   utilisateurControllers.getUserByEmailWithPasswordAndPassToNext,
//   verifyPassword
// );

router.post("/utilisateurs", hashPassword, utilisateurControllers.postUser);

module.exports = router;
