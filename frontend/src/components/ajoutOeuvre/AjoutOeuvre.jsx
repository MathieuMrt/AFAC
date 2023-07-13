import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AjoutOeuvre() {
  const [image, setImage] = useState("");
  const [imageFile, setFile] = useState();
  const getImage = (e) => {
    setFile(e.target.files[0]);
  };

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

    const newData = new FormData(); // create new form object
    newData.append("ref_archives", formData.ref_archives);
    newData.append("titre", formData.titre);
    newData.append("auteur", formData.auteur);
    newData.append("date_creation", formData.date_creation);
    newData.append("format", formData.format);
    newData.append("technique", formData.technique);
    newData.append("lien_page_auteur", formData.lien_page_auteur);
    newData.append("lien_article", formData.lien_article);
    newData.append("categorie", formData.categorie);
    newData.append("details", formData.details);
    newData.append("resume", formData.resume);
    //
    newData.append("file", imageFile);

    axios({
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_URL}/oeuvres`,
      data: newData, // send image to server
    })
      .then((response) => {
        const { data } = response; // return image url of uploaded img
        setImage(data.url); // set url to image variable
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
            <form
              action="/oeuvres"
              encType="multipart/form-data"
              id="id_form_ajoutOeuvre"
              method="POST"
            >
              <label htmlFor="ref_archives">Ref_archives </label>
              <input
                type="text"
                name="ref_archives"
                onChange={handleChange}
                value={formData.ref_archives}
              />
              <label htmlFor="titre">Titre </label>

              <input
                type="text"
                placeholder="Champs requis *"
                name="titre"
                onChange={handleChange}
                value={formData.titre}
                required
              />
              <label htmlFor="auteur">Auteur </label>
              <input
                type="text"
                name="auteur"
                onChange={handleChange}
                value={formData.auteur}
              />
              <label htmlFor="date_creation">Date de création </label>
              <input
                type="text"
                name="date_creation"
                onChange={handleChange}
                value={formData.date_creation}
              />
              <label htmlFor="format">Format </label>
              <input
                type="text"
                name="format"
                onChange={handleChange}
                value={formData.format}
              />
              <label htmlFor="technique">Technique utilisée </label>
              <input
                type="text"
                name="technique"
                onChange={handleChange}
                value={formData.technique}
              />
              <label htmlFor="lien_page_auteur">
                Site internet de l'auteur
              </label>
              <input
                type="text"
                name="lien_page_auteur"
                onChange={handleChange}
                value={formData.lien_page_auteur}
              />
              <label htmlFor="lien_article">Lien de l'article</label>
              <input
                type="text"
                name="lien_article"
                onChange={handleChange}
                value={formData.lien_article}
              />
              <label htmlFor="categorie">
                Catégorie (Usines,Travailleurs, Lieux, Animaux){" "}
              </label>
              <input
                type="text"
                placeholder="Champs requis *"
                name="categorie"
                onChange={handleChange}
                value={formData.categorie}
                required
              />
              <label htmlFor="details">Détails</label>
              <input
                type="text"
                name="details"
                placeholder="Champs requis *"
                onChange={handleChange}
                value={formData.details}
                required
              />
              <label htmlFor="resume">Titre résumé</label>
              <input
                type="text"
                placeholder="Champ requis *"
                name="resume"
                onChange={handleChange}
                value={formData.resume}
                required
              />
              <label htmlFor="img">Image</label>
              <input
                className="input-file"
                id="input-file"
                type="file"
                placeholder="Champs requis *"
                name="file"
                onChange={getImage}
                required
              />
              {image}
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
