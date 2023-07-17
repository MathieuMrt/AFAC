import React, { useEffect, useContext } from "react";
import axios from "axios";
import FavoriteCard from "../favoriteCard/FavoriteCard";
import LoginContext from "../../navigation/LoginContext";

function Favoris() {
  const { user, oeuvresFavorites, setOeuvresFavorites } =
    useContext(LoginContext);

  const fetchFavorites = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/utilisateurs/${user.id}/favoris`,
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
    if (user.id !== "") {
      fetchFavorites();
    }
  }, [user]);

  return (
    <div className="fav-box">
      <h2 className="fav-title">MES FAVORIS</h2>
      <ul className="fav_ul">
        {oeuvresFavorites.map((el) => {
          return (
            <FavoriteCard
              key={el.id}
              image={el.img}
              id={el.id}
              refreshFavs={fetchFavorites}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Favoris;
