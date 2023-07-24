import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [oeuvresData, setOeuvresData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [userDeleteConfirmation, setUserDeleteConfirmation] = useState(false);
  const [OeuvreCurrentId, setOeuvreCurrentId] = useState();
  const [userCurrentId, setUserCurrentId] = useState();
  const [oeuvresNewFetch, setOeuvresNewFetch] = useState(false);
  const [usersNewFetch, setUsersNewFetch] = useState(false);
  const [adminChecked, setAdminChecked] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/utilisateurs`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.error(err));
    setUsersNewFetch(false);
  }, [usersNewFetch]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/oeuvres`)
      .then((res) => {
        setOeuvresData(res.data);
      })
      .catch((err) => console.error(err));
    setOeuvresNewFetch(false);
  }, [oeuvresNewFetch]);

  const adminDeleteOeuvreHandler = (id) => {
    setDeleteConfirmation(!deleteConfirmation);
    setOeuvreCurrentId(id);
  };

  const adminDeleteUserHandler = (id) => {
    setUserDeleteConfirmation(!userDeleteConfirmation);
    setUserCurrentId(id);
  };

  const validateDeleteOeuvreHandler = () => {
    const id = OeuvreCurrentId;
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/oeuvres/${id}`)
      .then((res) => console.warn(res))
      .catch((err) => console.error(err));

    setOeuvresNewFetch(!oeuvresNewFetch);
    setDeleteConfirmation(!deleteConfirmation);
  };

  const validateDeleteUserHandler = () => {
    const id = userCurrentId;
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/utilisateurs/${id}`)
      .then((res) => console.warn(res))
      .catch((err) => console.error(err));

    setUsersNewFetch(!usersNewFetch);
    setUserDeleteConfirmation(!userDeleteConfirmation);
  };

  const adminChange = (id, estAdmin) => {
    if (estAdmin === 0 || estAdmin === null) {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/utilisateurs/admin/${id}`, {
          estAdmin: 1,
        })
        .then((res) => console.warn(res))
        .catch((err) => console.error(err));
    } else {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/utilisateurs/admin/${id}`, {
          estAdmin: 0,
        })
        .then((res) => console.warn(res))
        .catch((err) => console.error(err));
    }
    setUsersNewFetch(!usersNewFetch);
  };

  const adminCheckboxHandler = (id, estAdmin) => {
    setAdminChecked(!adminChecked);
    adminChange(id, estAdmin);
  };

  return (
    <div className="page-admin-globale">
      <div className="page-admin-container">
        {/* ----------------------------------------Fenêtre Delete Oeuvre------------------------------------------ */}
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
        {/* ----------------------------------------Fenêtre Delete User------------------------------------------ */}
        {userDeleteConfirmation && (
          <div className="admin-delete-user-confirmation">
            <h4>Êtes-vous sûr(e) de vouloir supprimer cet utilisateur ?</h4>
            <h5>(Définitif)</h5>
            <div className="admin-button-delete-validation">
              <button
                type="button"
                onClick={validateDeleteUserHandler}
                onKeyDown={validateDeleteUserHandler}
              >
                OUI
              </button>
              <button
                type="button"
                onClick={adminDeleteUserHandler}
                onKeyDown={adminDeleteUserHandler}
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
                  OEUVRES
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
              {/* ----------------------------------------Oeuvres------------------------------------------ */}
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
              <tr>
                <td className="admin-button-ajout-oeuvre-container" colSpan="5">
                  <NavLink to="/ajoutOeuvre">
                    <button type="button" className="admin-button-ajout-oeuvre">
                      {" "}
                      + Ajouter une oeuvre
                    </button>
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="admin-tableau-container admin-user-small-table">
          <table>
            <thead>
              <tr>
                <th className="admin-tableau-title" colSpan="4">
                  UTILISATEURS
                </th>
              </tr>
              <tr className="admin-tableau-champs">
                <th className="admin-table-name">Nom de l'utilisateur</th>
                <th>Admin</th>
                <th className="admin-th-trash">
                  <FaTrashAlt />
                </th>
              </tr>
            </thead>
            <tbody>
              {/* ---------------------------------------Users------------------------------------------ */}
              {userData.map((i) => {
                const isAdminPrincipal = i.id === 1;

                return (
                  <tr key={i.id}>
                    <td className="nom_prenom">
                      {i.prenom} {i.nom}
                    </td>
                    <td className="td-center">
                      <input
                        type="checkbox"
                        defaultChecked={i.estAdmin === 1}
                        onChange={() => {
                          adminCheckboxHandler(i.id, i.estAdmin);
                        }}
                        disabled={isAdminPrincipal}
                      />
                    </td>
                    <td className="trash-cell">
                      {isAdminPrincipal ? (
                        <button
                          type="button"
                          className="td-center admin-trash disabled"
                        >
                          <FaTrashAlt />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="td-center admin-trash"
                          onKeyDown={() => adminDeleteUserHandler(i.id)}
                          onClick={() => adminDeleteUserHandler(i.id)}
                        >
                          <FaTrashAlt />
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Admin;
