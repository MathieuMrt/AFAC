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

  insert(favori) {
    return this.database.query(
      `insert into ${this.table} 
      (oeuvres_id, utilisateur_id) values (?, ?)`,
      [favori.oeuvres_id, favori.utilisateur_id]
    );
  }
}

module.exports = FavorisManager;
