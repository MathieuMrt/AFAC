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

      {/* -------------------- OU ------------------- */}

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
        >
          <input id="login" type="text" placeholder="Nom" name="nom" required />
          <input
            id=""
            type="text"
            placeholder="Prénom"
            name="prenom"
            required
          />
          <input id="" type="email" placeholder="Mail" name="mail" required />
          <input
            id=""
            type="password"
            placeholder="Mot de passe"
            name="mot_de_passe"
            required
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
