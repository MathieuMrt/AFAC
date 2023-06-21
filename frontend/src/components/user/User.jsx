import React, { useState } from "react";

function User() {
  const [modifyButton, setModifyButton] = useState(false);
  const [modifyEmail, setModifyEmail] = useState(false);
  const [modifyName, setModifyName] = useState(false);

  const handleModifyPasswordClick = () => setModifyButton(!modifyButton);
  const handleModifyEmailClick = () => setModifyEmail(!modifyEmail);
  const handleModifyNameClick = () => setModifyName(!modifyName);

  return (
    <div className="user-global-container">
      <div className="user-container-connexion">
        <div className="user-name user-info-field">
          <h5>Nom:</h5>
          <div className="user-container-text-center">
            {modifyName ? (
              <form action="" method="get" className="user-form">
                <input
                  type="text"
                  name="name"
                  id="user-new-password-input"
                  required
                  placeholder="Nom Utilisateur"
                />
              </form>
            ) : (
              <p>Nom Utilisateur</p>
            )}
          </div>
          <div className="user-button-container">
            {modifyName ? (
              <button
                className="user-button-change"
                type="button"
                onClick={handleModifyNameClick}
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
        <div className="user-mail user-info-field">
          <h5>Email:</h5>
          <div className="user-container-text-center">
            {modifyEmail ? (
              <form action="" method="get" className="user-form">
                <input
                  type="text"
                  name="name"
                  id="user-new-password-input"
                  required
                  placeholder="utilisateur@gmail.com"
                />
              </form>
            ) : (
              <p>utilisateur@gmail.com</p>
            )}
          </div>
          <div className="user-button-container">
            {modifyEmail ? (
              <button
                className="user-button-change"
                type="button"
                onClick={handleModifyEmailClick}
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
            <p>*********</p>
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
                  type="text"
                  name="name"
                  id="user-new-password-input"
                  required
                />
              </form>
            </div>
            <div className="user-button-container">
              <button className="user-button-change" type="button">
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
