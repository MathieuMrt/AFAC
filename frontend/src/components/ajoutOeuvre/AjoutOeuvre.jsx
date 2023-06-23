import React from "react";

function AjoutOeuvre() {
  return (
    <div className="ajoutOeuvre">
      <h2>Ajouter une oeuvre</h2>

      <form
        className="ajoutOeuvre-formulaire"
        id="id_form_ajoutOeuvre"
        method="POST"
      >
        <input
          type="text"
          placeholder="Ref_archives"
          name="ref_archives"
          id=""
          required
        />
        <input type="text" placeholder="Titre" name="titre" id="" required />
        <input type="text" placeholder="Auteur" name="auteur" id="" required />
        <input
          type="text"
          placeholder="Date_creation"
          name="date_creation"
          id=""
          required
        />
        <input type="text" placeholder="Format" name="format" id="" required />
        <input
          type="text"
          placeholder="Technique"
          name="technique"
          id=""
          required
        />
        <input
          type="text"
          placeholder="Lien_page_auteur"
          name="lien_page_auteur"
          id=""
          required
        />
        <input
          type="text"
          placeholder="Lien_article"
          name="lien_article"
          id=""
          required
        />
        <input
          type="text"
          placeholder="Categorie"
          name="categorie"
          id=""
          required
        />
        <textarea
          type="text"
          placeholder="Details"
          name="details"
          id=""
          required
        />
        <input type="text" placeholder="Resume" name="resume" id="" required />
        <input type="text" placeholder="Image" name="img" id="" required />
      </form>
      <div className="ajoutOeuvre-button-container">
        <button
          className="ajoutOeuvre-button"
          type="submit"
          form="id_form_ajoutOeuvre"
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default AjoutOeuvre;
