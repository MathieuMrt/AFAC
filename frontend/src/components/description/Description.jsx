import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Description() {
  const [details, setDetails] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5001/oeuvres/${id}`)
      .then((response) => response.json())
      .then((res) => {
        console.warn("Artoung Bicyclette", res);
        setDetails(res);
      })
      .catch((err) =>
        console.error(
          "Une erreur est survenue dans la récupération des données",
          err
        )
      );
  }, []);

  return (
    <div className="description">
      <div className="description_oeuvre">
        <img src={details.img} alt={details.titre} />
      </div>
      <div className="description_details_oeuvre">
        <h1 className="description_title">{details.titre}</h1>
        <p className="description_descriptif">{details.details}</p>
        <div className="description_informations">
          {details.format && (
            <p>
              <span>Format:</span> {details.format} cm
            </p>
          )}
          {details.date_creation && (
            <p>
              <span>Date de creation:</span> {details.date_creation}
            </p>
          )}
          {details.technique && (
            <p>
              <span>Technique:</span> {details.technique}
            </p>
          )}
          {details.auteur && (
            <p>
              <span>Auteur:</span> {details.auteur}
            </p>
          )}
          {details.lien_article && (
            <a href={details.lien_article}>Lien de l'oeuvre</a>
          )}
          {details.lien_page_auteur && (
            <a href={details.lien_page_auteur}>Page de l'auteur</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Description;
