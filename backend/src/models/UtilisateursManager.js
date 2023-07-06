const AbstractManager = require("./AbstractManager");

class UtilisateursManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateurs" });
  }

  insert(utilisateur) {
    return this.database.query(
      `insert into ${this.table} 
      (nom, prenom, mail, hashedPassword, estAdmin, commentaire_bloque ) values (?, ?, ?, ?, ?, ?)`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.mail,
        utilisateur.hashedPassword,
        utilisateur.estAdmin,
        utilisateur.commentaire_bloque,
      ]
    );
  }

  update(utilisateur) {
    return this.database.query(
      `update ${this.table} set nom = ?, prenom = ?, mail = ?, hashedPassword = ?, estAdmin = ?, commentaire_bloque = ? where id = ?`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.mail,
        utilisateur.hashedPassword,
        utilisateur.estAdmin,
        utilisateur.commentaire_bloque,
        utilisateur.id,
      ]
    );
  }

  updateAdmin(utilisateur) {
    return this.database.query(
      `update ${this.table} set estAdmin = ? where id = ?`,
      [utilisateur.estAdmin, utilisateur.id]
    );
  }

  getUserByLogin(utilisateur) {
    return this.database.query(`select * from utilisateurs where mail = ?`, [
      utilisateur.mail,
    ]);
  }
}

module.exports = UtilisateursManager;
