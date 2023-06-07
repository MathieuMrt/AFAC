import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function SingleCard({ titreResume, titre, categorie, image, id }) {
  return (
    <div className="singleCard">
      <div className="image-container">
        <img className="galerie-img" src={image} alt="oeuvre" />
      </div>
      <div className="info-container">
        <h3 className="titre-carte">
          {titreResume ? titreResume.toUpperCase() : titre.toUpperCase()}
        </h3>
        {categorie}
        <NavLink to={`/galerie/${id}`} className="bouton-plus-info">
          + D'INFORMATION
        </NavLink>
      </div>
    </div>
  );
}

SingleCard.propTypes = {
  titreResume: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  toUpperCase: PropTypes.func.isRequired,
  categorie: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SingleCard;
