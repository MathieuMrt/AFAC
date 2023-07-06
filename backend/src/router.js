const express = require("express");

const router = express.Router();

const oeuvreControllers = require("./controllers/oeuvreControllers");
const utilisateurControllers = require("./controllers/utilisateurControllers");
const favoriControllers = require("./controllers/favoriControllers");

const { hashPassword, verifyPassword, verifyToken } = require("./auth");

router.get("/oeuvres", oeuvreControllers.browse);
router.get("/oeuvres/:id", oeuvreControllers.read);
router.put("/oeuvres/:id", oeuvreControllers.edit);
router.post("/oeuvres", oeuvreControllers.add);
router.delete("/oeuvres/:id", oeuvreControllers.destroy);

router.get("/utilisateurs", utilisateurControllers.browse); // OK
router.get("/utilisateurs/:id", utilisateurControllers.read); // OK
router.put("/utilisateurs/:id", utilisateurControllers.edit);
router.put(
  "/utilisateurs/:id/password",
  hashPassword,
  utilisateurControllers.editPassword
);

router.put("/utilisateurs/admin/:id", utilisateurControllers.editAdmin);

router.delete("/utilisateurs/:id", utilisateurControllers.destroy);

router.post(
  "/login",
  utilisateurControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.post("/utilisateurs", hashPassword, utilisateurControllers.postUser); // OK

router.get(
  "/utilisateurs/:id/favoris",
  verifyToken,
  favoriControllers.getFavoritesByUser
);
router.post("/utilisateurs/:id/favoris", verifyToken, favoriControllers.add);
router.delete(
  "/utilisateurs/:id/favoris/:id",
  verifyToken,
  favoriControllers.destroy
);

module.exports = router;
