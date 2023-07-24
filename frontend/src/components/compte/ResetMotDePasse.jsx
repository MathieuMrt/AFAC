import { useState } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";

function ResetMotDePasse() {
  const [password, setPassword] = useState("");

  const { id } = useParams();

  const [send, setSend] = useState(false);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickPassword = () => {
    const data = {
      password,
    };

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/utilisateurs/${id}/password`,
        data
      )
      .then((res) => {
        console.warn(res.data);
      })
      .catch((err) => console.warn(err));

    setSend(true);
  };

  return send === false ? (
    <div className="resetmotdepasse_connectez_vous">
      <h2>Réinitialiser votre mot de passe : </h2>

      <form
        className="formulaire_compte_connexion"
        id="id_form_connexion"
        method="PUT"
      >
        <input
          id=""
          type="password"
          placeholder="Nouveau mot de passe"
          name="password"
          required
          minLength="6"
          onChange={handlePassword}
        />

        {/*      <input
          id=""
          type="password"
          placeholder="Confirmer nouveau mot de passe"
          name="password"
          required
          minLength="6"
          onChange={handlePassword}
        /> */}
      </form>

      <button
        type="button"
        form="id_form_connexion"
        onClick={handleClickPassword}
      >
        Envoyer
      </button>
    </div>
  ) : (
    <section className="motdepasseoublie_merci">
      <h1>Votre mot de passe a bien été modifié</h1>
      <p>Vous pouvez désormais vous connecter</p>
      <NavLink to="/compte">
        <button className="resetmotdepasse-retour-connexion" type="button">
          Connexion
        </button>
      </NavLink>
    </section>
  );
}

export default ResetMotDePasse;
