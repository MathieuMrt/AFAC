import { useState } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";

function ResetMotDePasse() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [motDePasseIncorrect, setMotDePasseIncorrect] = useState(false);

  const { id } = useParams();

  const [send, setSend] = useState(false);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword1 = (e) => {
    setConfirmPassword(e.target.value);
  };

  const closeErrmotDePasseIncorrect = () => {
    setMotDePasseIncorrect(false);
    setSend(false);
  };

  const handleClickPassword = () => {
    if (confirmPassword === password) {
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
    } else {
      setMotDePasseIncorrect(true);
    }
  };

  if (motDePasseIncorrect) {
    return (
      <div className="error_reset_password">
        <div className="error_reset_password_content">
          <h3>Oups !</h3>
          <br />
          <p className="p_email">
            Les deux mots de passe ne sont pas identiques !
          </p>
          <p>Veuillez recommencer</p>
          <br />
          <button
            className="buttonpopup_fermer_reset"
            type="button"
            onClick={closeErrmotDePasseIncorrect}
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  if (!motDePasseIncorrect && send === false) {
    return (
      <div className="resetmotdepasse_connectez_vous">
        <h2>Réinitialiser votre mot de passe : </h2>

        <form
          className="formulaire_compte_connexion"
          id="id_form_connexion"
          method="PUT"
        >
          <input
            id="1"
            type="password"
            placeholder="Nouveau mot de passe"
            name="password"
            required
            minLength="6"
            onChange={handlePassword}
          />

          <input
            id="2"
            type="password"
            placeholder="Confirmer nouveau mot de passe"
            name="password"
            required
            minLength="6"
            onChange={handlePassword1}
          />
        </form>

        <button
          type="button"
          form="id_form_connexion"
          onClick={handleClickPassword}
        >
          Envoyer
        </button>
      </div>
    );
  }
  return (
    <section className="motdepasseoublie_merci">
      <h1>Votre mot de passe a bien été modifié</h1>
      <p>Vous pouvez désormais vous connecter</p>
      <NavLink className="resetmotdepasse-retour-connexion" to="/compte">
        <button className="resetmotdepasse-retour-connexion" type="button">
          Connexion
        </button>
      </NavLink>
    </section>
  );
}

export default ResetMotDePasse;
