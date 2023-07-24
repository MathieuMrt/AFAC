const AbstractManager = require("./AbstractManager");

class FavorisManager extends AbstractManager {
  constructor() {
    super({ table: "favoris" });
  }

  findFavorites(utilisateurId) {
    return this.database.query(
      `SELECT * FROM oeuvres 
         JOIN favoris ON oeuvres.id = favoris.oeuvres_id 
         WHERE favoris.utilisateur_id = ?`,
      [utilisateurId]
    );
  }

  insert(id, favori) {
    return this.database.query(
      `insert into ${this.table} 
      (oeuvres_id, utilisateur_id) values (?, ?)`,
      [favori.oeuvreId, id]
    );
  }

  deleteFavori(id, favori) {
    return this.database.query(
      `delete from ${this.table} where utilisateur_id = ? and oeuvres_id = ?`,
      [id, favori]
    );
  }
}

module.exports = FavorisManager;
