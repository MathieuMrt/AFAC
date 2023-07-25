import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function MotDePassOublie() {
  const [data, setData] = useState({
    email: "",
  });

  const [send, setSend] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5001/motdepasseoublie", data)
      .then((res) => {
        console.info(res);
      })
      .catch((err) => {
        console.error(err);
      });

    setSend(true);
  };

  return send === false ? (
    <div className="motdepasseoublie_connectez_vous">
      <h2>Mot de passe oublié ?</h2>

      <form
        className="formulaire_compte_connexion"
        id="id_form_connexion"
        onSubmit={handleSubmit}
      >
        <input
          id="email"
          type="email"
          placeholder="Mail"
          name="email"
          required
          onChange={handleChange}
        />

        <button type="submit" form="id_form_connexion">
          Envoyer
        </button>
      </form>
    </div>
  ) : (
    <section className="motdepasseoublie_merci">
      <h1>Votre demande a bien été prise en compte</h1>
      <p>Nous prendrons contact avec vous très rapidement...</p>
      <NavLink className="modedepasseoublie-retour-accueil" to="/">
        <button className="modedepasseoublie-retour-accueil" type="button">
          Retour à l'accueil
        </button>
      </NavLink>
    </section>
  );
}
