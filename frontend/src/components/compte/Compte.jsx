import React, { useState } from "react";
import axios from "axios";

function Compte() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleConnexion = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        mail,
        password,
      })
      .then((res) => {
        localStorage.setItem("utilisateur", JSON.stringify(res.data));
      })
      .catch((err) => console.error(err));
  };

  const [credentials, setCredentials] = useState({
    mail: "",
    mot_de_passe: "",
    nom: "",
    prenom: "",
  });

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
        .post("http://localhost:5001/utilisateurs", credentials)
        .then((res) => console.warn(res));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="compte">
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
          {/* {console.log(mail)} */}

          <input
            id=""
            type="password"
            placeholder="Mot de passe"
            name="mot_de_passe"
            required
            value={password}
            minLength="6"
            maxLength="15"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {console.log(password)} */}
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
            required
            onChange={compteHandleChange}
          />

          <input
            type="text"
            placeholder="Nom"
            name="nom"
            id=""
            required
            onChange={compteHandleChange}
          />
          <input
            type="text"
            placeholder="Prénom"
            name="prenom"
            required
            onChange={compteHandleChange}
          />
          <input
            id=""
            type="password"
            placeholder="Mot de passe"
            name="mot_de_passe"
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
