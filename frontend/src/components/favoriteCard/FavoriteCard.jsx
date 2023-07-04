import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import PropTypes from "prop-types";

function FavoriteCard({ image, id }) {
  return (
    <div className="fav-card">
      <div className="fav-container">
        <img className="fav-img" src={image} alt="oeuvre" />
        <div className="fav-buttons">
          <NavLink to={`/galerie/${id}`} className="bouton-plus-info">
            +
          </NavLink>
          <AiOutlineHeart className="fav-heart" />
        </div>
      </div>
    </div>
  );
}

FavoriteCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FavoriteCard;
