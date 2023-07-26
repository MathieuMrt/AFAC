import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import axios from "axios";
import LoginContext from "../../navigation/LoginContext";

function SingleCard({
  titreResume,
  titre,
  categorie,
  image,
  oeuvreId,
  refreshFavs,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { user, isConnected, oeuvresFavorites } = useContext(LoginContext);

  // const userId = user.id;
  // // console.warn("USER ID", userId);
  // const oeuvreId = id;
  // // console.warn("OEUVRE ID", oeuvreId);

  useEffect(() => {
    if (isConnected && user && oeuvresFavorites) {
      const found = oeuvresFavorites.find(
        (el) => el.utilisateur_id === user.id && el.oeuvres_id === oeuvreId
      );
      if (found) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [oeuvresFavorites, user, isConnected]);

  const singleCardFavoriteHandler = () => {
    if (!isFavorite) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/utilisateurs/${
            user?.id
          }/favoris`,
          { oeuvreId },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        )
        .then((response) => refreshFavs(response))
        .catch((err) => console.error(err));
    } else {
      axios
        .delete(
          `${import.meta.env.VITE_BACKEND_URL}/utilisateurs/${
            user?.id
          }/favoris/${oeuvreId}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        )
        .then((response) => refreshFavs(response))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="singleCard">
      {isConnected && (
        <div className="icon-container">
          {!isFavorite ? (
            <AiOutlineHeart
              className="heart-not-fav"
              onClick={singleCardFavoriteHandler}
            />
          ) : (
            <AiFillHeart
              className="heart-fav"
              onClick={singleCardFavoriteHandler}
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
        <NavLink to={`/galerie/${oeuvreId}`} className="bouton-plus-info">
          + D'INFORMATIONS
        </NavLink>
      </div>
    </div>
  );
}

SingleCard.propTypes = {
  titreResume: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  oeuvreId: PropTypes.number.isRequired,
  refreshFavs: PropTypes.func.isRequired,
};

export default SingleCard;
