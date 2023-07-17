import PropTypes from "prop-types";

function ModifierOeuvreForm({
  getImage,
  formData,
  handleSubmit,
  handleChange,
}) {
  return (
    <form id="id_form_modifierOeuvre" method="POST">
      <label htmlFor="ref_archives">Ref_archives </label>
      <input
        type="text"
        placeholder="Ref_archives"
        name="ref_archives"
        onChange={(e) => handleChange(e)}
        value={formData.ref_archives}
      />
      <label htmlFor="titre ">Titre </label>
      <input
        type="text"
        placeholder="Champs requis *"
        name="titre"
        onChange={(e) => handleChange(e)}
        value={formData.titre}
        required
      />
      <label htmlFor="auteur">Auteur </label>
      <input
        type="text"
        placeholder="Auteur"
        name="auteur"
        onChange={(e) => handleChange(e)}
        value={formData.auteur}
      />
      <label htmlFor="date_creation">Date de création </label>
      <input
        type="text"
        placeholder="Date_creation"
        name="date_creation"
        onChange={(e) => handleChange(e)}
        value={formData.date_creation}
      />
      <label htmlFor="format">Format </label>
      <input
        type="text"
        placeholder="Format"
        name="format"
        onChange={(e) => handleChange(e)}
        value={formData.format}
      />
      <label htmlFor="technique">Technique utilisée </label>
      <input
        type="text"
        placeholder="Technique"
        name="technique"
        onChange={(e) => handleChange(e)}
        value={formData.technique}
      />
      <label htmlFor="lien_page_auteur">Site internet de l'auteur</label>
      <input
        type="text"
        placeholder="https://www."
        name="lien_page_auteur"
        onChange={(e) => handleChange(e)}
        value={formData.lien_page_auteur}
      />
      <label htmlFor="lien_article">Lien de l'article</label>
      <input
        type="text"
        placeholder="https://www."
        name="lien_article"
        onChange={(e) => handleChange(e)}
        value={formData.lien_article}
      />
      <label htmlFor="categorie">Catégorie</label>
      <input
        type="text"
        placeholder="Champs requis *"
        name="categorie"
        onChange={(e) => handleChange(e)}
        value={formData.categorie}
      />
      <label htmlFor="details">Détails</label>
      <input
        type="text"
        placeholder="Champs requis *"
        name="details"
        onChange={(e) => handleChange(e)}
        value={formData.details}
        required
      />
      <label htmlFor="resume">Titre résumé</label>
      <input
        type="text"
        placeholder="Champs requis *"
        name="resume"
        onChange={(e) => handleChange(e)}
        value={formData.resume}
        required
      />
      <label htmlFor="img">Url de l'image</label>
      <input
        className="input-file"
        type="file"
        id="input-file"
        placeholder="Champs requis *"
        name="updateFile"
        onChange={(e) => getImage(e)}
        required
      />

      <div className="modifierOeuvre-button-container">
        <button
          className="ajoutOeuvre-button"
          onClick={handleSubmit}
          type="submit"
          form="id_form_modifierOeuvre"
        >
          Modifier
        </button>
      </div>
    </form>
  );
}

export default ModifierOeuvreForm;

ModifierOeuvreForm.propTypes = {
  formData: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  handleSubmit: PropTypes.string.isRequired,
  getImage: PropTypes.string.isRequired,
};
