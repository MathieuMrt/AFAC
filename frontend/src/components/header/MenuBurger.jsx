import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function MenuBurger() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={`menuBurger ${menuVisible ? "visible" : "hidden"}`}>
      <button
        className={`mb_burger ${
          menuVisible ? "visible" : "hidden_bouton-burger"
        }`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="mb_bar" />
        <span className="mb_bar" />
        <span className="mb_bar" />
      </button>

      <NavLink to="/">
        <img
          className="mb_header_logo"
          src="../../src/assets/img/AFAC974_Logo_600x237nega.png"
          alt="logo AFAC"
          onClick={toggleMenu}
          role="presentation"
        />
      </NavLink>
      <nav className="mb_navbar">
        <NavLink
          className="mb_navlinks"
          to="/"
          onClick={toggleMenu}
          role="button"
        >
          ACCUEIL
        </NavLink>
        <NavLink
          className="mb_navlinks"
          to="/galerie"
          onClick={toggleMenu}
          role="button"
        >
          GALERIE
        </NavLink>
        <NavLink
          className="mb_navlinks"
          to="/apropos"
          onClick={toggleMenu}
          role="button"
        >
          A PROPOS
        </NavLink>
        <NavLink
          className="mb_navlinks"
          to="/galerie/:id/favoris"
          onClick={toggleMenu}
          role="button"
        >
          FAVORIS
        </NavLink>
        <NavLink to="/compte">
          <button type="button" className="mb_connexion" onClick={toggleMenu}>
            Connexion
          </button>
        </NavLink>
      </nav>
    </div>
  );
}

export default MenuBurger;
