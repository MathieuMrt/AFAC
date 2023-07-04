import React from "react";

function ModifierOeuvre() {
  return (
    <div className="modifierOeuvre">
      <h2>Modifier une oeuvre</h2>

      <form
        className="modifierOeuvre-formulaire"
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
      <div className="modifierOeuvre-button-container">
        <button
          className="modifierOeuvre-button"
          type="submit"
          form="id_form_ajoutOeuvre"
        >
          Modifier
        </button>
      </div>
    </div>
  );
}

export default ModifierOeuvre;