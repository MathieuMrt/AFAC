import PropTypes from "prop-types";

function ModifierOeuvreForm({ formData, handleSubmit, handleChange }) {
  return (
    <form id="id_form_modifierOeuvre" method="POST">
      <input
        type="text"
        placeholder="Ref_archives"
        name="ref_archives"
        onChange={(e) => handleChange(e)}
        value={formData.ref_archives}
      />

      <input
        type="text"
        placeholder="Titre"
        name="titre"
        onChange={(e) => handleChange(e)}
        value={formData.titre}
        required
      />
      <input
        type="text"
        placeholder="Auteur"
        name="auteur"
        onChange={(e) => handleChange(e)}
        value={formData.auteur}
      />
      <input
        type="text"
        placeholder="Date_creation"
        name="date_creation"
        onChange={(e) => handleChange(e)}
        value={formData.date_creation}
      />
      <input
        type="text"
        placeholder="Format"
        name="format"
        onChange={(e) => handleChange(e)}
        value={formData.format}
      />
      <input
        type="text"
        placeholder="Technique"
        name="technique"
        onChange={(e) => handleChange(e)}
        value={formData.technique}
        required
      />
      <input
        type="text"
        placeholder="Lien_page_auteur"
        name="lien_page_auteur"
        onChange={(e) => handleChange(e)}
        value={formData.lien_page_auteur}
      />
      <input
        type="text"
        placeholder="Lien_article"
        name="lien_article"
        onChange={(e) => handleChange(e)}
        value={formData.lien_article}
      />
      <input
        type="text"
        placeholder="Categorie"
        name="categorie"
        onChange={(e) => handleChange(e)}
        value={formData.categorie}
      />
      <input
        type="text"
        placeholder="Details"
        name="details"
        onChange={(e) => handleChange(e)}
        value={formData.details}
      />
      <input
        type="text"
        placeholder="Resume"
        name="resume"
        onChange={(e) => handleChange(e)}
        value={formData.resume}
        required
      />
      <input
        type="text"
        placeholder="Image"
        name="img"
        onChange={(e) => handleChange(e)}
        value={formData.img}
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
};
