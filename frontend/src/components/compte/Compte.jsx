import React from "react";

function Compte() {
  return (
    <div className="compte">
      <div className="connectez_vous">
        <h2>Connectez-vous :</h2>

        <form
          className="formulaire_compte_connexion"
          id="id_form_connexion"
          method="POST"
        >
          <input type="email" placeholder="Mail" name="mail" id="" required />
          <input
            type="password"
            placeholder="Mot de passe"
            name="mot_de_passe"
            id=""
            required
            minLength="6"
            maxLength="15"
          />
        </form>
        <button type="submit" form="id_form_connexion">
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
          <input type="text" placeholder="Nom" name="nom" id="" required />
          <input
            type="text"
            placeholder="Prénom"
            name="prenom"
            id=""
            required
          />
          <input type="email" placeholder="Mail" name="mail" id="" required />
          <input
            type="password"
            placeholder="Mot de passe"
            name="mot_de_passe"
            id=""
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
