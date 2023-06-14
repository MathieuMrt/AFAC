const AbstractManager = require("./AbstractManager");

class UtilisateursManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateurs" });
  }

  insert(utilisateur) {
    return this.database.query(
      `insert into ${this.table} 
      (nom, prenom, mail, mot_de_passe, estAdmin, commentaire_bloque) values (?, ?, ?, ?, ?, ?)`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.mail,
        utilisateur.mot_de_passe,
        utilisateur.estAdmin,
        utilisateur.commentaire_bloque,
      ]
    );
  }

  update(utilisateur) {
    return this.database.query(
      `update ${this.table} set nom = ?, prenom = ?, mail = ?, mot_de_passe = ?, estAdmin = ?, commentaire_bloque = ? where id = ?`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.mail,
        utilisateur.mot_de_passe,
        utilisateur.estAdmin,
        utilisateur.commentaire_bloque,
        utilisateur.id,
      ]
    );
  }
}

module.exports = UtilisateursManager;
