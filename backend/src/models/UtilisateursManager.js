const AbstractManager = require("./AbstractManager");

class UtilisateursManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateurs" });
  }

  insert(utilisateur) {
    return this.database.query(
      `insert into ${this.table} 
      (nom, prenom, mail, hashedPassword ) values (?, ?, ?, ?)`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.mail,
        utilisateur.hashedPassword,
      ]
    );
  }

  update(utilisateur) {
    return this.database.query(
      `update ${this.table} set nom = ?, prenom = ?, mail = ?, hashedPassword = ? where id = ?`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.mail,
        utilisateur.hashedPassword,
        utilisateur.id,
      ]
    );
  }

  updatePassword(utilisateur) {
    return this.database.query(
      `update ${this.table} set hashedPassword = ? where id = ?`,
      [utilisateur.hashedPassword, utilisateur.id]
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
