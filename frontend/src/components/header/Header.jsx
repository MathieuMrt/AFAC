import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import MenuBurger from "./MenuBurger";
import LoginContext from "../../navigation/LoginContext";
import RouageIcon from "../../assets/img/header/utilisateur-icon.png";

function Header() {
  const [showSettings, setShowSettings] = useState(false);
  const [userInformations, setUserInformations] = useState({
    nom: "",
    prenom: "",
  });
  const { user, setUser, isConnected, setIsConnected } =
    useContext(LoginContext);

  const handleDisconnect = () => {
    setUser({
      estAdmin: "",
      id: "",
      mail: "",
      nom: "",
      prenom: "",
    });
    setIsConnected(false);
    setShowSettings(false);
    localStorage.removeItem("token");
  };

  const toggleParametresOpen = () => {
    setShowSettings(!showSettings);
  };

  const toggleParametresClose = () => {
    setShowSettings(!showSettings);
  };

  function connect() {
    if (!isConnected) {
      return (
        <NavLink to="/compte">
          <button type="button" className="connexion">
            Connexion
          </button>
        </NavLink>
      );
    }
    if (!showSettings) {
      return (
        <div className="connexionOn">
          <button
            type="button"
            className="buttonrouage"
            onClick={toggleParametresOpen}
          >
            <img src={RouageIcon} alt="Rouage" />
          </button>
          <div className="prenomUtilisateurConnexion">
            {userInformations.prenom} {userInformations.nom}
          </div>
        </div>
      );
    }

    return (
      <div className="connexionOn_open">
        <button
          type="button"
          className="buttonrouage"
          onClick={toggleParametresOpen}
        >
          <img src={RouageIcon} alt="Rouage" />
        </button>
        <div className="connectionOn_open_div">
          <div className="prenomUtilisateurConnexionOpen">
            {userInformations.prenom} {userInformations.nom}
          </div>
          <NavLink
            className="linkProfilConnexion"
            to="/utilisateur/:id"
            onClick={toggleParametresClose}
          >
            <h5>Profil</h5>
          </NavLink>
          <h5
            className="boutonDeco"
            role="presentation"
            onClick={handleDisconnect}
          >
            <NavLink className="linkProfilConnexion" to="/compte">
              Déconnexion
            </NavLink>
          </h5>
        </div>
      </div>
    );
  }

  const fetchUserInformations = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/utilisateurs/${user.id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        setUserInformations(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (user.id !== "") {
      fetchUserInformations();
    }
  }, [userInformations]);

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
      {connect()}
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
        {user.estAdmin === 1 && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "activeNavlinks" : "navlinks"
            }
          >
            ADMIN
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default Header;
