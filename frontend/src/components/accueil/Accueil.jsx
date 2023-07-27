import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LoginContext from "../../navigation/LoginContext";

function Accueil() {
  const { isConnected } = useContext(LoginContext);
  return (
    <div className="acc-container">
      <div className="acc-main-text">
        <h2>
          Exposition des journées européennes du Patrimoine 2023
          <span className="acc-main-span">
            <br />
            Visitez la galerie comme si vous y étiez.
          </span>
        </h2>
      </div>
      <div className="acc-bloc-img">
        <article className="div-bloc-oeuvre">
          <div className="bloc-oeuvre">
            <img
              className="img-bloc-oeuvres"
              src="../../../public/assets/img/apercu1.jpg"
              alt="dessin homme qui danse"
            />
            <img
              className="img-bloc-oeuvres"
              src="../../../public/assets/img/apercu2.jpg"
              alt="aquarelle paysage"
            />
            <NavLink to="/galerie">
              <button type="button" className="voir-oeuvre-button">
                Voir les Oeuvres
              </button>
            </NavLink>
          </div>
        </article>
        <div className="bloc-info-galerie">
          <NavLink
            to={!isConnected ? "/compte" : "/favoris"}
            className="accueil-navlink"
          >
            <div className="bloc-info-container">
              <h3>Composez votre galerie personnalisée</h3>
              <img
                src="../../../public/assets/img/preview-galerie.png"
                alt="galerie preview"
              />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="acc-main-text">
        <h2>
          Des expositions accessibles pour tous, sans se déplacer
          <span className="acc-main-span">
            <br />
            la culture à porter de main pour nos enfants
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Accueil;
