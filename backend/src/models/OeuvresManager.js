const AbstractManager = require("./AbstractManager");

class OeuvresManager extends AbstractManager {
  constructor() {
    super({ table: "oeuvres" });
  }

  insert(oeuvre) {
    // const {ref_archives, titre, auteur, img, date_creation, format, technique, lien_page_auteur, lien_article, categorie, details, resume} = req.body;

    return this.database.query(
      `insert into ${this.table} 
        (ref_archives, titre, auteur, img, date_creation, format, technique, lien_page_auteur, lien_article, categorie, details, resume) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        oeuvre.ref_archives,
        oeuvre.titre,
        oeuvre.auteur,
        oeuvre.img,
        oeuvre.date_creation,
        oeuvre.format,
        oeuvre.technique,
        oeuvre.lien_page_auteur,
        oeuvre.lien_article,
        oeuvre.categorie,
        oeuvre.details,
        oeuvre.resume,
      ]
    );
  }

  update(oeuvre) {
    const { id } = oeuvre;
    // const {ref_archives, titre, auteur, img, date_creation, format, technique, lien_page_auteur, lien_article, categorie, details, resume} = req.body;
    return this.database.query(
      `update ${this.table} set ref_archives = ?, titre = ?, auteur = ?, date_creation = ?, format = ?, technique = ?, lien_page_auteur = ?, lien_article = ?, categorie = ?, details = ?, resume = ? where id = ?`,
      [
        oeuvre.ref_archives,
        oeuvre.titre,
        oeuvre.auteur,
        oeuvre.date_creation,
        oeuvre.format,
        oeuvre.technique,
        oeuvre.lien_page_auteur,
        oeuvre.lien_article,
        oeuvre.categorie,
        oeuvre.details,
        oeuvre.resume,
        id,
      ]
    );
  }
}
// oeuvre.ref_archives, oeuvre.titre, oeuvre.auteur, oeuvre.img, oeuvre.date_creation, oeuvre.format, oeuvre.technique, oeuvre.lien_page_auteur, oeuvre.lien_article, oeuvre.categorie, oeuvre.details, oeuvre.resume
module.exports = OeuvresManager;
