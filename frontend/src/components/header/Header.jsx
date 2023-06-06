import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="../../src/assets/img/AFAC974_Logo_600x237nega.png"
        alt="logo AFAC"
      />
      <div className="hexagone">
        <div className="hexagonemain" />
      </div>
      <button type="button" className="connexion">
        Connexion
      </button>
      <nav>
        <li>ACCUEIL</li>
        <li>GALERIE</li>
        <li>A PROPOS</li>
        <li>FAVORIS</li>
      </nav>
    </div>
  );
}

export default Header;
