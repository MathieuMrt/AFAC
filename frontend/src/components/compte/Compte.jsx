import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import LoginContext from "../../navigation/LoginContext";

function Compte() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setIsConnected } = useContext(LoginContext);
  const [errPasswordConexion, setErrPasswordConexion] = useState(false);
  const [compteConfirmation, setCompteConfirmation] = useState(false);
  const [emailDejaUtilise, setEmailDejaUtilise] = useState(false);

  const closeErrPasswordConexion = () => {
    setErrPasswordConexion(false);
  };

  const closeErrEmailDejaUtilise = () => {
    setEmailDejaUtilise(false);
  };

  const navigate = useNavigate();

  const [compteConfirmation, setCompteConfirmation] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const utilisateur = jwtDecode(token);
      console.warn("TOKEN UTILISATEUR", utilisateur);
      setUser(utilisateur);
    }
  }, []);

  const handleConnexion = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        mail,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        const utilisateur = jwtDecode(res.data.token);
        console.warn("TOKEN UTILISATEUR", utilisateur);
        setUser(utilisateur);
        setIsConnected(true);
        console.warn("token validé ");
        navigate("/galerie");
      })
      .catch((err) => {
        console.error("mot de passe ou ident incorrect", err);
        setErrPasswordConexion(true);
      });
  };

  const [credentials, setCredentials] = useState({
    mail: "",
    password: "",
    nom: "",
    prenom: "",
  });

  const compteConfirmationCloseHandler = () => {
    setCompteConfirmation(false);
    setCredentials({
      mail: "",
      password: "",
      nom: "",
      prenom: "",
    });
  };

  const compteHandleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/utilisateurs`, credentials)
        .then((res) => console.warn(res));
    } catch (error) {
      console.error(error);
    }


  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5001/utilisateurs", credentials)
      .then((res) => {
        console.warn(res);
        setCompteConfirmation(true);
      })
      .catch((error) => {
        console.warn(error);
        if (error.response.data === "email error") {
          setEmailDejaUtilise(true);
        }
      });
  };

  return (
    <div className="compte">
      {!emailDejaUtilise && compteConfirmation && (
        <div className="compteCreationConfirmation">
          <div className="compteCreationConfirmation_content">
            <button
              type="button"
              className="compteConfirmationClose"
              onClick={compteConfirmationCloseHandler}
            >
              X
            </button>
            <h4>Votre compte a bien été enregistré !</h4>
            <p>
              Vous pouvez à présent ajouter des oeuvres à vos favoris, et aussi
              laisser des commentaires !
            </p>
          </div>
        </div>
      )}
      {emailDejaUtilise && (
        <div className="error_message_password">
          <div className="error_message_password_content">
            <h4>Oups !</h4>
            <br />
            <p>Cet email est déjà utilisé !</p>
            <br />
            <button
              className="buttonpopup_compte"
              type="button"
              onClick={closeErrEmailDejaUtilise}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {errPasswordConexion && (
        <div className="error_message_password">
          <div className="error_message_password_content">
            <h4>Oups !</h4>
            <br />
            <p>
              Il semble que votre mot de passe ou votre identifiant soit
              incorrect
            </p>
            <button
              className="buttonpopup_compte"
              type="button"
              onClick={closeErrPasswordConexion}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      <div className="connectez_vous">
        <h2>Connectez-vous :</h2>

        <form
          className="formulaire_compte_connexion"
          id="id_form_connexion"
          method="POST"
        >
          <input
            id="email"
            type="email"
            placeholder="Mail"
            name="mail"
            required
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />

          <input
            id=""
            type="password"
            placeholder="Mot de passe"
            name="password"
            required
            value={password}
            minLength="6"
            maxLength="15"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <button
          type="submit"
          form="id_form_connexion"
          onClick={handleConnexion}
        >
          Connexion
        </button>
      </div>

      <div className="ou">
        <h2>Ou</h2>
      </div>

      {/* -------------------- INSCRIPTION ------------------- */}
      <div className="inscription">
        <h2>Créez votre compte</h2>

        <form
          className="formulaire_compte_connexion"
          id="id_form_inscription"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Mail"
            name="mail"
            value={credentials.mail}
            required
            onChange={compteHandleChange}
          />

          <input
            type="text"
            placeholder="Nom"
            name="nom"
            id=""
            value={credentials.nom}
            required
            onChange={compteHandleChange}
          />
          <input
            type="text"
            placeholder="Prénom"
            name="prenom"
            value={credentials.prenom}
            required
            onChange={compteHandleChange}
          />

          <input
            id=""
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={credentials.password}
            required
            onChange={compteHandleChange}
            minLength="6"
            maxLength="15"
          />
        </form>
        <button type="submit" form="id_form_inscription">
          Inscription
        </button>
      </div>
    </div>
  );
}

export default Compte;
