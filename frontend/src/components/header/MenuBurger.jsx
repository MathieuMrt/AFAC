import { NavLink } from "react-router-dom";
import React, { useState, useContext } from "react";
import LoginContext from "../../navigation/LoginContext";

function MenuBurger() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const { user, isConnected } = useContext(LoginContext);

  return (
    <div className={`menuBurger ${menuVisible ? "visible" : "hidden"}`}>
      <div className="mb_container">
        <button
          className={`mb_burger ${
            menuVisible ? "cross" : "hidden_bouton-burger"
          }`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="mb_bar" />
        </button>
      </div>
      <nav className="mb_navbar">
        <NavLink to="/" onClick={toggleMenu} role="presentation">
          <img
            className="mb_header_logo"
            src="../../src/assets/img/AFAC974_Logo_600x237nega.png"
            alt="logo AFAC"
          />
        </NavLink>
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
        {isConnected && (
          <NavLink
            className="mb_navlinks"
            to="favoris"
            onClick={toggleMenu}
            role="button"
          >
            FAVORIS
          </NavLink>
        )}
        {user.estAdmin === 1 && (
          <NavLink to="/admin" className="mb_connexion" onClick={toggleMenu}>
            ADMIN
          </NavLink>
        )}
        {!isConnected && (
          <NavLink to="/compte">
            <button type="button" className="mb_connexion" onClick={toggleMenu}>
              Connexion
            </button>
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default MenuBurger;
