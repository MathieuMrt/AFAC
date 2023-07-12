import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import axios from "axios";
import LoginContext from "../../navigation/LoginContext";

function SingleCard({ titreResume, titre, categorie, image, id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user, isConnected } = useContext(LoginContext);

  const handleClick = () => {
    setIsFavorite(!isFavorite);

    const userId = user.utilisateur.id;
    const oeuvreId = id.toString();

    if (isConnected) {
      axios
        .post(`http://localhost:5001/utilisateurs/${userId}/favoris`, {
          oeuvreId,
        })
        .then((response) => console.warn(response))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="singleCard">
      {isConnected && (
        <div className="icon-container">
          {isFavorite === false ? (
            <AiOutlineHeart
              className="heart-not-fav"
              onClick={handleClick}
              style={{ color: isFavorite }}
            />
          ) : (
            <AiFillHeart
              className="heart-fav"
              onClick={handleClick}
              style={{ color: isFavorite }}
            />
          )}
        </div>
      )}
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
