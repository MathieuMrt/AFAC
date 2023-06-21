import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header_logo"
          src="../../src/assets/img/AFAC974_Logo_600x237nega.png"
          alt="logo AFAC"
        />
      </NavLink>
      <img
        className="header_hexagone"
        src="../../src/assets/img/hexagone.png"
        alt="hexagone"
      />
      <div className="hexagone">
        <div className="hexagonemain" />
      </div>
      <NavLink to="/compte">
        <button type="button" className="connexion">
          Connexion
        </button>
      </NavLink>
      <nav>
        <NavLink className="navlinks" to="/">
          ACCUEIL
        </NavLink>
        <NavLink className="navlinks" to="/galerie">
          GALERIE
        </NavLink>
        <NavLink className="navlinks" to="/apropos">
          A PROPOS
        </NavLink>
        <NavLink className="navlinks" to="/galerie/:id/favoris">
          FAVORIS
        </NavLink>
        <NavLink className="navlinks" to="/admin">
          ADMIN
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
