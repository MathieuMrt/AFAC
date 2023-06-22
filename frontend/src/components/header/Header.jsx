import React from "react";
import { NavLink } from "react-router-dom";
import MenuBurger from "./MenuBurger";

function Header() {
  return (
    <div className="header">
      <div className="hiddenMenu">
        <MenuBurger />
      </div>
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeNavlinks" : "navlinks"
          }
        >
          ACCUEIL
        </NavLink>
        <NavLink
          to="/galerie"
          className={({ isActive }) =>
            isActive ? "activeNavlinks" : "navlinks"
          }
        >
          GALERIE
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? "activeNavlinks" : "navlinks"
          }
        >
          A PROPOS
        </NavLink>
        <NavLink
          to="/favoris"
          className={({ isActive }) =>
            isActive ? "activeNavlinks" : "navlinks"
          }
        >
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
