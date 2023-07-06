import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [oeuvresData, setOeuvresData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [currentId, setCurrentId] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5001/utilisateurs")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5001/oeuvres")
      .then((res) => {
        setOeuvresData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const adminDeleteOeuvreHandler = (id) => {
    setDeleteConfirmation(!deleteConfirmation);
    setCurrentId(id);
  };

  const validateDeleteOeuvreHandler = () => {
    const id = currentId;
    axios
      .delete(`http://localhost:5001/oeuvres/${id}`)
      .then((res) => console.warn(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="page-admin-globale">
      <div className="page-admin-container">
        {deleteConfirmation && (
          <div className="admin-delete-user-confirmation">
            <h4>Êtes-vous sûr(e) de vouloir supprimer cette oeuvre ?</h4>
            <h5>(Définitif)</h5>
            <div className="admin-button-delete-validation">
              <button
                type="button"
                onClick={validateDeleteOeuvreHandler}
                onKeyDown={validateDeleteOeuvreHandler}
              >
                OUI
              </button>
              <button
                type="button"
                onClick={adminDeleteOeuvreHandler}
                onKeyDown={adminDeleteOeuvreHandler}
              >
                NON
              </button>
            </div>
          </div>
        )}
        <section className="admin-tableau-container">
          <table>
            <thead>
              <tr>
                <th className="admin-tableau-title" colSpan="5">
                  Liste des OEUVRES
                </th>
              </tr>
              <tr className="admin-tableau-champs">
                <th className="admin-colonne-width-small">Référence</th>
                <th className="admin-colonne-width-medium">Titre</th>
                <th className="admin-colonne-width-medium">Auteur</th>
                <th className="admin-colonne-width-small">
                  <FiEdit />
                </th>
                <th className="admin-colonne-width-small">
                  <FaTrashAlt />
                </th>
              </tr>
            </thead>
            <tbody>
              {oeuvresData.map((i) => {
                return (
                  <tr key={i.id}>
                    <td>{i.ref_archives}</td>
                    <td>{i.titre}</td>
                    <td>{i.auteur}</td>
                    <td className="td-center">
                      <NavLink
                        className="admin-navlink "
                        to={`/oeuvre/admin/${i.id}`}
                      >
                        <FiEdit />
                      </NavLink>
                    </td>

                    <td className="trash-cell">
                      <button
                        type="button"
                        className="td-center admin-trash"
                        onKeyDown={() => adminDeleteOeuvreHandler(i.id)}
                        onClick={() => adminDeleteOeuvreHandler(i.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                );
              })}
              <td className="admin-button-ajout-oeuvre-container" colSpan="5">
                <NavLink to="/ajoutOeuvre">
                  <button type="button" className="admin-button-ajout-oeuvre">
                    {" "}
                    + Ajouter une oeuvre
                  </button>
                </NavLink>
              </td>
            </tbody>
          </table>
        </section>
        <section className="admin-tableau-container admin-user-small-table">
          <table>
            <thead>
              <tr>
                <th className="admin-tableau-title" colSpan="4">
                  Liste des UTILISATEURS
                </th>
              </tr>
              <tr className="admin-tableau-champs">
                <th className="admin-table-name">Nom de l'utilisateur</th>
                <th className="admin-table-comment">
                  Bloquer les commentaires
                </th>
                <th>Admin</th>
                <th>
                  <FaTrashAlt />
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((i) => {
                return (
                  <tr key={i.id}>
                    <td>
                      {i.nom} {i.prenom}
                    </td>
                    <td className="td-center">
                      <MdOutlineCheckBoxOutlineBlank />
                    </td>
                    <td className="td-center">
                      <MdOutlineCheckBoxOutlineBlank />
                    </td>
                    <td>
                      <FaTrashAlt />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
      <div className="admin-button-deconnexion-container">
        <button type="button" className="admin-button-deconnexion">
          Déconnexion
        </button>
      </div>
    </div>
  );
}

export default Admin;
