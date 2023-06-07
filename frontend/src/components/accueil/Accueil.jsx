import React from "react";

function Accueil() {
  return (
    <div className="acc-body">
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
          <div className="bloc-oeuvres">
            <img
              className="img-bloc-oeuvres"
              src="src/assets/img/apercu1.jpg"
              alt="dessin homme qui danse"
            />
            <img
              className="img-bloc-oeuvres"
              src="src/assets/img/apercu2.jpg"
              alt="aquarelle paysage"
            />
            <button type="button" className="voir-oeuvre-button">
              Voir les Oeuvres
            </button>
          </div>
        </article>
        <div className="bloc-info-galerie">
          <div className="bloc-info-container">
            <h3>Composez votre galerie personnalisée</h3>
            <img
              src="src/assets/img/preview-galerie.png"
              alt="galerie preview"
            />
            <h4>Et envoyez vos œuvres favorites à vos proches</h4>
          </div>
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
