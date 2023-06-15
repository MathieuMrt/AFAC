import React from "react";

function Compte() {
  return (
    <div className="compte">
      <div className="connectez_vous">
        <h2>Connectez-vous :</h2>

        <form className="fomulaire_compte_connexion">
          <input type="" placeholder="" name="" id="" required />
          <input type="" placeholder="" name="" id="" required />
          <button type="submit">Connection</button>
        </form>
      </div>
      <div className="ou">
        <h2>Ou</h2>
      </div>
      <div className="inscription">
        <h2>Créez votre compte</h2>

        <form className="fomulaire_compte_connexion">
          <input type="" placeholder="" name="" id="" required />
          <input type="" placeholder="" name="" id="" required />
          <input type="" placeholder="" name="" id="" required />
          <input type="" placeholder="" name="" id="" required />
          <button type="submit">Inscription</button>
        </form>
      </div>
    </div>
  );
}

export default Compte;
