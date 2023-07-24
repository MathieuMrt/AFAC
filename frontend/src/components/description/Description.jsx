import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Description() {
  const [details, setDetails] = useState("");
  const [zoomed, setZoomed] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/oeuvres/${id}`)
      .then((response) => response.json())
      .then((res) => {
        console.warn("la réponse", res);
        setDetails(res);
      })
      .catch((err) =>
        console.error(
          "Une erreur est survenue dans la récupération des données",
          err
        )
      );
  }, []);

  const handleZoomClick = () => {
    setZoomed(!zoomed);
  };

  // L'objectif de cette fonction est d'améliorer l'accessibilité des sites web en s'assurant que les utilisateurs qui naviguent principalement avec un clavier, plutôt qu'avec une souris ou un écran tactile, puissent toujours interagir avec les éléments qui répondent aux événements de clic.
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleZoomClick();
    }
  }
  const navigate = useNavigate();

  const descriptionReturnHandler = () => {
    navigate(-1);
  };

  return (
    <div className="description">
      <button
        className="return-button"
        type="button"
        onClick={descriptionReturnHandler}
      >
        Retour
      </button>
      <div className="description_oeuvre">
        <button
          type="button"
          onClick={handleZoomClick}
          onKeyDown={handleKeyDown}
        >
          <img
            src={details.img}
            alt={details.titre}
            className={zoomed ? "zoomed" : ""}
          />
        </button>
        <h5 className="description-info-resize">
          Cliquez sur l'image pour l'agrandir
        </h5>
      </div>
      <div className="description_details_oeuvre">
        <h1 className="description_title">{details.titre}</h1>
        <p className="description_descriptif">{details.details}</p>
        <div className="description_informations">
          {details.format && (
            <p>
              <span className="description-infos-style">Format:</span>{" "}
              {details.format} cm
            </p>
          )}
          {details.date_creation && (
            <p>
              <span className="description-infos-style">Date de creation:</span>{" "}
              {details.date_creation}
            </p>
          )}
          {details.technique && (
            <p>
              <span className="description-infos-style">Technique:</span>{" "}
              {details.technique}
            </p>
          )}
          {details.auteur && (
            <p>
              <span className="description-infos-style">Auteur:</span>{" "}
              {details.auteur}
            </p>
          )}
          {details.lien_article && (
            <a className="description-auteur-link" href={details.lien_article}>
              Plus d'informations
            </a>
          )}
          {details.lien_page_auteur && (
            <a
              className="description-auteur-link"
              href={details.lien_page_auteur}
            >
              Page de l'auteur
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Description;
