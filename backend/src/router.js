const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/assets/images/afac-img/");
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    req.fname = `${uniqueSuffix}-${file.originalname}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const router = express.Router();

const oeuvreControllers = require("./controllers/oeuvreControllers");
const utilisateurControllers = require("./controllers/utilisateurControllers");
const favoriControllers = require("./controllers/favoriControllers");

const { hashPassword, verifyPassword, verifyToken } = require("./auth");

router.get("/oeuvres", oeuvreControllers.browse);
router.get("/oeuvres/:id", oeuvreControllers.read);
router.put("/oeuvres/:id", upload.single("updateFile"), oeuvreControllers.edit);
router.post("/oeuvres", upload.single("file"), oeuvreControllers.add);
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
); // connection
/// middleware au milieu ?

router.post("/utilisateurs", hashPassword, utilisateurControllers.postUser); // Inscription

router.get(
  "/utilisateurs/:id/favoris",
  verifyToken,
  favoriControllers.getFavoritesByUser
);
router.post("/utilisateurs/:id/favoris", verifyToken, favoriControllers.add);
router.delete(
  "/utilisateurs/:id/favoris/:oeuvreId",
  verifyToken,
  favoriControllers.destroy
);

module.exports = router;
