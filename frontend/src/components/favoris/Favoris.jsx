import React, { useState, useEffect, useContext } from "react";
import FavoriteCard from "../favoriteCard/FavoriteCard";
import LoginContext from "../../navigation/LoginContext";

function Favoris() {
  const [oeuvreFavorite, setOeuvreFavorite] = useState([]);
  const { user } = useContext(LoginContext);

  useEffect(() => {
    const userId = user.id;

    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/utilisateurs/${userId}/favoris`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    )
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
