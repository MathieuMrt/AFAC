const models = require("../models");

const getFavoritesByUser = (req, res) => {
  const { id } = req.params;

  models.favori
    .findFavorites(id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const favori = req.body;
  const userId = req.params.id;

  // TODO validations (length, format...)

  models.favori
    .insert(userId, favori)
    .then(([result]) => {
      res.location(`/favori/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const favori = req.params.oeuvreId;
  const userId = req.params.id;
  models.favori
    .deleteFavori(userId, favori)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res
          .status(404)
          .send(
            "L'oeuvre favorite ne semble pas correspondre à un favori existant"
          );
      } else {
        res.status(200).send("L'oeuvre a bien été retirée de vos favoris !");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getFavoritesByUser,
  add,
  destroy,
};
