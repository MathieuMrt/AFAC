import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AjoutOeuvre() {
  const [isOeuvreSended, setIsOeuvreSended] = useState(false);

  const [formData, setFormData] = useState({
    ref_archives: "",
    titre: "",
    auteur: "",
    img: "",
    date_creation: "",
    format: "",
    technique: "",
    lien_page_auteur: "",
    lien_article: "",
    categorie: "",
    details: "",
    resume: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification de la validité des champs requis
    const form = document.getElementById("id_form_ajoutOeuvre");
    if (!form.checkValidity()) {
      // Afficher les erreurs ou effectuer une action appropriée
      return;
    }

    fetch("http://localhost:5001/oeuvres", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(() => {
        setIsOeuvreSended(true);

        setTimeout(() => {
          navigate("/galerie");
        }, 4000);
        console.warn("Insertion réussie");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ul className="ajoutOeuvre">
      {!isOeuvreSended && (
        <>
          <li className="ajoutOeuvre_title">
            <h2>Ajouter une oeuvre</h2>
          </li>

          <li className="ajoutOeuvre_form">
            <form id="id_form_ajoutOeuvre" method="POST">
              <input
                type="text"
                placeholder="Ref_archives"
                name="ref_archives"
                onChange={handleChange}
                value={formData.ref_archives}
                required
              />

              <input
                type="text"
                placeholder="Titre"
                name="titre"
                onChange={handleChange}
                value={formData.titre}
                required
              />
              <input
                type="text"
                placeholder="Auteur"
                name="auteur"
                onChange={handleChange}
                value={formData.auteur}
                required
              />
              <input
                type="text"
                placeholder="Date_creation"
                name="date_creation"
                onChange={handleChange}
                value={formData.date_creation}
                required
              />
              <input
                type="text"
                placeholder="Format"
                name="format"
                onChange={handleChange}
                value={formData.format}
                required
              />
              <input
                type="text"
                placeholder="Technique"
                name="technique"
                onChange={handleChange}
                value={formData.technique}
                required
              />
              <input
                type="text"
                placeholder="Lien_page_auteur"
                name="lien_page_auteur"
                onChange={handleChange}
                value={formData.lien_page_auteur}
                required
              />
              <input
                type="text"
                placeholder="Lien_article"
                name="lien_article"
                onChange={handleChange}
                value={formData.lien_article}
                required
              />
              <input
                type="text"
                placeholder="Categorie"
                name="categorie"
                onChange={handleChange}
                value={formData.categorie}
                required
              />
              <input
                type="text"
                placeholder="Details"
                name="details"
                onChange={handleChange}
                value={formData.details}
                required
              />
              <input
                type="text"
                placeholder="Resume"
                name="resume"
                onChange={handleChange}
                value={formData.resume}
                required
              />
              <input
                type="text"
                placeholder="Image"
                name="img"
                onChange={handleChange}
                value={formData.img}
                required
              />

              <div className="ajoutOeuvre-button-container">
                <button
                  className="ajoutOeuvre-button"
                  onClick={handleSubmit}
                  type="submit"
                  form="id_form_ajoutOeuvre"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </li>
        </>
      )}
      {isOeuvreSended && (
        <li className="ajoutOeuvre_message_success">
          <div className="progress-bar" />
          <p>L'oeuvre a bien été ajoutée à la base de données </p>
        </li>
      )}
    </ul>
  );
}

export default AjoutOeuvre;
