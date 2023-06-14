const models = require("../models");

const browse = (req, res) => {
  models.oeuvre
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.oeuvre
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const oeuvre = req.body;

  // TODO validations (length, format...)

  oeuvre.id = parseInt(req.params.id, 10);

  models.oeuvre
    .update(oeuvre)
    .then(([result]) => {
      if (!result.affectedRows) {
        res.sendStatus(404);
      } else {
        res.status(200).send({
          message: `L'oeuvre avec l'id ${oeuvre.id} a été mise à jour !`,
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const oeuvre = req.body;

  // TODO validations (length, format...)

  models.oeuvre
    .insert(oeuvre)
    .then(([result]) => {
      res.location(`/oeuvres/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.oeuvre
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
  browse,
  read,
  edit,
  add,
  destroy,
};
