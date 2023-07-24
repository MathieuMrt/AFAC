import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import SingleCard from "../singleCard/SingleCard";
import LoginContext from "../../navigation/LoginContext";

function Galerie() {
  const [oeuvre, setOeuvre] = useState([]);
  const [search, setSearch] = useState("");

  const { user, setOeuvresFavorites } = useContext(LoginContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/oeuvres`)
      .then((response) => response.json())
      .then((res) => {
        setOeuvre(res);
      })
      .catch((err) =>
        console.error(
          "Une erreur est survenue dans la récupération des données",
          err
        )
      );
  }, []);

  const handleSelector = (e) => {
    setSearch(e.target.value);
  };

  const fetchFavorites = () => {
    if (user?.id) {
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
          // console.log(res.data)
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    if (user?.id !== "") {
      fetchFavorites();
    }
  }, [user]);

  // console.log(oeuvresFavorites[0].oeuvres_id)

  return (
    <main className="galerie">
      <div className="select-container">
        <select
          className="categorie_selection"
          value={search}
          onChange={handleSelector}
        >
          <option className="option" value="">
            Sélection par catégorie
          </option>
          {[...new Set(oeuvre.map((el) => el.categorie))].map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </div>
      <ul className="galerie_ul">
        {oeuvre
          .filter((el) => search === "" || el.categorie === search)
          .map((el) => {
            return (
              <SingleCard
                key={el.id}
                oeuvreId={el.id}
                titreResume={el.resume}
                titre={el.titre}
                categorie={el.categorie}
                image={el.img}
                refreshFavs={fetchFavorites}
              />
            );
          })}
      </ul>
    </main>
  );
}

export default Galerie;
