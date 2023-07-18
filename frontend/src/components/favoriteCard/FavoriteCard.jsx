import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TbTrashX } from "react-icons/tb";
import PropTypes from "prop-types";
import axios from "axios";
import LoginContext from "../../navigation/LoginContext";

function FavoriteCard({ image, id, refreshFavs, titre, titreResume }) {
  const { user } = useContext(LoginContext);

  const favoriteCardHandler = () => {
    const userId = user.id;
    const oeuvreId = id;

    axios
      .delete(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/utilisateurs/${userId}/favoris/${oeuvreId}`,
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
  };

  return (
    <div className="fav-card">
      <div className="fav-container">
        <img className="fav-img" src={image} alt="oeuvre" />
        <div className="favEtiquette">
          {titreResume ? titreResume.toUpperCase() : titre.toUpperCase()}
        </div>
        <div className="fav-buttons">
          <NavLink to={`/galerie/${id}`} className="bouton-plus-info">
            +
          </NavLink>
          <TbTrashX
            className="fav-trash"
            type="button"
            onClick={favoriteCardHandler}
          />
        </div>
      </div>
    </div>
  );
}

FavoriteCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  refreshFavs: PropTypes.func.isRequired,
  titre: PropTypes.string.isRequired,
  titreResume: PropTypes.string.isRequired,
};

export default FavoriteCard;
