import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import MenuBurger from "./MenuBurger";
import LoginContext from "../../navigation/LoginContext";

function Header() {
  const { setUser, isConnected, setIsConnected } = useContext(LoginContext);

  const handleDisconnect = () => {
    setUser(undefined);
    setIsConnected(false);
    localStorage.removeItem("token");
  };

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
        {!isConnected ? (
          <button type="button" className="connexion">
            Connexion
          </button>
        ) : (
          <button
            type="button"
            className="connexion"
            onClick={handleDisconnect}
          >
            Déconnexion
          </button>
        )}
      </NavLink>
      <nav className="hiddenNavPrinc">
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
        {isConnected && (
          <NavLink
            to="/favoris"
            className={({ isActive }) =>
              isActive ? "activeNavlinks" : "navlinks"
            }
          >
            FAVORIS
          </NavLink>
        )}
        {/* {user.estAmin && */}
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "activeNavlinks" : "navlinks"
          }
        >
          ADMIN
        </NavLink>
        {/* } */}
      </nav>
    </div>
  );
}

export default Header;
