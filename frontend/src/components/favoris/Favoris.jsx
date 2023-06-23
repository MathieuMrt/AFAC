import React, { useState, useEffect } from "react";
import FavoriteCard from "../favoriteCard/FavoriteCard";

function Favoris() {
  const [oeuvreFavorite, setOeuvreFavorite] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/oeuvres") // il faudra remplacer cet url par celui de la route getAllFavorites elle sera opérationnelle RL
      .then((response) => response.json())
      .then((res) => {
        console.warn("les oeuvres favorites", res);
        setOeuvreFavorite(res);
      })
      .catch((err) =>
        console.error("Erreur lors de la récupération des données", err)
      );
  }, []);

  return (
    <div>
      <h2 className="fav-title">MES FAVORIS</h2>
      <ul className="fav_ul">
        {oeuvreFavorite.map((el) => {
          return <FavoriteCard key={el.id} image={el.img} id={el.id} />;
        })}
      </ul>
    </div>
  );
}

export default Favoris;
