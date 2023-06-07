import React from "react";

function Description() {
  return (
    <div className="description">
      <div className="description_oeuvre">
        <h1>Ici se trouvera bientot l'oeuvre</h1>
      </div>
      <div className="description_details_oeuvre">
        <h2 className="description_title">
          Ici se trouvera le titre de l'oeuvre
        </h2>
        <p className="description_descriptif">
          nous retrouverons ici le descriptif de l'oeuvre
        </p>
      </div>
      <div className="description_note">
        <div className="description_avis">
          <div className="description_stars">étoiles</div>
          <form className="description_text_button">
            <textarea
              className="description_text"
              placeholder="Écrivez votre message"
            />
            <button className="description_button" type="submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Description;
