import React, { useState, useEffect } from "react";
import SingleCard from "../singleCard/SingleCard";

function Galerie() {
  const [oeuvre, setOeuvre] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/oeuvres")
      .then((response) => response.json())
      .then((res) => {
        console.warn("La réponse", res);
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
                id={el.id}
                titreResume={el.resume}
                titre={el.titre}
                categorie={el.categorie}
                image={el.img}
              />
            );
          })}
      </ul>
    </main>
  );
}

export default Galerie;
