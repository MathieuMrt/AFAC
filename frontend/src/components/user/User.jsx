import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

function User() {
  const [modifyButton, setModifyButton] = useState(false);
  const [modifyEmail, setModifyEmail] = useState(false);
  const [modifyName, setModifyName] = useState(false);
  const [modifyFirstname, setModifyFirstname] = useState(false);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { id } = useParams();

  const handleModifyPasswordClick = () => setModifyButton(!modifyButton);
  const handleModifyEmailClick = () => setModifyEmail(!modifyEmail);
  const handleModifyNameClick = () => setModifyName(!modifyName);
  const handleModifyFirstnameClick = () => setModifyFirstname(!modifyFirstname);

  const handleNom = (e) => {
    setNom(e.target.value);
  };

  const handlePrenom = (e) => {
    setPrenom(e.target.value);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5001/utilisateurs/${id}`)
      .then((res) => {
        const result = res.data;
        setNom(result.nom);
        setPrenom(result.prenom);
        setMail(result.mail);
        setPassword(result.hashedPassword);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleClick = () => {
    const data = {
      nom,
      prenom,
      mail,
      hashedPassword: password,
    };

    axios
      .put(`http://localhost:5001/utilisateurs/${id}`, data)
      .then((res) => {
        console.warn(res.data);
      })
      .catch((err) => console.warn(err));
  };

  const handleClickPassword = () => {
    const data = {
      hashedPassword: password,
    };

    axios
      .put(`http://localhost:5001/utilisateurs/${id}/password`, data)
      .then((res) => {
        console.warn(res.data);
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div className="user-global-container">
      <div className="user-container-connexion">
        <div className="user-name user-info-field">
          <h5>Nom:</h5>
          <div className="user-container-text-center">
            {modifyName ? (
              <form className="user-form">
                <input
                  type="text"
                  name="nom"
                  id="user-new-password-input"
                  required
                  placeholder="Nom Utilisateur"
                  onChange={handleNom}
                  value={nom}
                />
              </form>
            ) : (
              <p>{nom}</p>
            )}
          </div>
          <div className="user-button-container">
            {modifyName ? (
              <button
                className="user-button-change"
                type="button"
                onClick={() => {
                  handleClick();
                  handleModifyNameClick();
                }}
              >
                Valider
              </button>
            ) : (
              <button
                className="user-button-change"
                type="button"
                onClick={handleModifyNameClick}
              >
                Modifier
              </button>
            )}
          </div>
        </div>
        <div className="user-name user-info-field">
          <h5>Prénom:</h5>
          <div className="user-container-text-center">
            {modifyFirstname ? (
              <form action="" method="get" className="user-form">
                <input
                  type="text"
                  name="prenom"
                  id="user-new-password-input"
                  required
                  placeholder="Nom Utilisateur"
                  onChange={handlePrenom}
                  value={prenom}
                />
              </form>
            ) : (
              <p>{prenom}</p>
            )}
          </div>
          <div className="user-button-container">
            {modifyFirstname ? (
              <button
                className="user-button-change"
                type="button"
                onClick={() => {
                  handleClick();
                  handleModifyFirstnameClick();
                }}
              >
                Valider
              </button>
            ) : (
              <button
                className="user-button-change"
                type="button"
                onClick={handleModifyFirstnameClick}
              >
                Modifier
              </button>
            )}
          </div>
        </div>
        <div className="user-mail user-info-field">
          <h5>Email:</h5>
          <div className="user-container-text-center">
            {modifyEmail ? (
              <form action="" method="get" className="user-form">
                <input
                  type="text"
                  name="mail"
                  id="user-new-password-input"
                  required
                  placeholder="utilisateur@gmail.com"
                  onChange={handleMail}
                  value={mail}
                />
              </form>
            ) : (
              <p>{mail}</p>
            )}
          </div>
          <div className="user-button-container">
            {modifyEmail ? (
              <button
                className="user-button-change"
                type="button"
                onClick={() => {
                  handleClick();
                  handleModifyEmailClick();
                }}
              >
                Valider
              </button>
            ) : (
              <button
                className="user-button-change"
                type="button"
                onClick={handleModifyEmailClick}
              >
                Modifier
              </button>
            )}
          </div>
        </div>
        <div className="user-password user-info-field">
          <h5>Mot de passe:</h5>
          <div className="user-container-text-center">
            <p>**********</p>
          </div>
          <div className="user-button-container">
            <button
              className="user-button-change"
              type="button"
              onClick={handleModifyPasswordClick}
            >
              Modifier
            </button>
          </div>
        </div>
        {modifyButton && (
          <div className="user-new-password user-info-field">
            <h5 className="user-new-pass-text">Nouveau mot de passe:</h5>
            <div className="user-container-text-center">
              <form action="" method="get" className="user-form">
                <input
                  type={showPassword ? "text" : "password"}
                  name="name"
                  id="user-new-password-input"
                  required
                  onChange={handlePassword}
                />
                <button
                  className="user-eyes-icons"
                  type="button"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}
                </button>
              </form>
            </div>
            <div className="user-button-container">
              <button
                className="user-button-change"
                type="button"
                onClick={() => {
                  handleClickPassword();
                  handleModifyPasswordClick();
                }}
              >
                Valider
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
