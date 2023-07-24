import React, { useEffect, useContext } from "react";
import axios from "axios";
import FavoriteCard from "../favoriteCard/FavoriteCard";
import MessagePasDeFavoris from "./MessagePasDeFavoris";
import LoginContext from "../../navigation/LoginContext";

function Favoris() {
  const { user, oeuvresFavorites, setOeuvresFavorites } =
    useContext(LoginContext);

  const fetchFavorites = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/utilisateurs/${user?.id}/favoris`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then((res) => {
        setOeuvresFavorites(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (user?.id !== "") {
      fetchFavorites();
    }
  }, [user]);

  return (
    <div className="fav-box">
      <h2 className="fav-title">MES FAVORIS</h2>
      <ul className="fav_ul">
        {oeuvresFavorites &&
          oeuvresFavorites.map((el) => {
            return (
              <FavoriteCard
                key={el.id}
                image={el.img}
                titreResume={el.resume}
                titre={el.titre}
                oeuvreId={el.id}
                refreshFavs={fetchFavorites}
              />
            );
          })}
        {oeuvresFavorites.length === 0 && <MessagePasDeFavoris />}
      </ul>
    </div>
  );
}

export default Favoris;
