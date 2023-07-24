import React from "react";

function MessagePasDeFavoris() {
  return (
    <div className="noFavs">
      <div className="noFavs-message">
        <h1>Vous n'avez pas encore de favoris à afficher...</h1>
        <h2>
          Rendez-vous sur la galerie pour sélectionner vos oeuvres préférées et
          les afficher ici !
        </h2>
      </div>
    </div>
  );
}

export default MessagePasDeFavoris;
