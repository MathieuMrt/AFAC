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

  // TODO validations (length, format...)

  models.favori
    .insert(favori)
    .then(([result]) => {
      res.location(`/favori/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.favori
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
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
