import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

function Admin() {
  return (
    <div className="page-admin-globale">
      <div className="page-admin-container">
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
              <tr>
                <td>40FI79</td>
                <td>Effet de nuit sur la Cheminée usine du Tampon</td>
                <td>Hippolyte Charles Napoléon Mortier, Duc de Trévise</td>
                <td>
                  {" "}
                  <FiEdit />
                </td>
                <td>
                  <FaTrashAlt />
                </td>
              </tr>
              <tr>
                <td>40FI79</td>
                <td>Effet de nuit sur la Cheminée usine du Tampon</td>
                <td>Hippolyte Charles Napoléon Mortier, Duc de Trévise</td>
                <td>
                  <FiEdit />
                </td>
                <td>
                  <FaTrashAlt />
                </td>
              </tr>

              <th className="admin-button-ajout-oeuvre-container" colSpan="5">
                <button type="button" className="admin-button-ajout-oeuvre">
                  {" "}
                  + Ajouter une oeuvre
                </button>
              </th>
            </tbody>
          </table>
        </section>
        <section className="admin-tableau-container">
          <table>
            <thead>
              <tr>
                <th className="admin-tableau-title" colSpan="4">
                  Liste des UTILISATEURS
                </th>
              </tr>
              <tr className="admin-tableau-champs">
                <th>Nom de l'utilisateur</th>
                <th>Bloquer les commentaires</th>
                <th>Admin</th>
                <th>
                  <FaTrashAlt />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe </td>
                <td>
                  <MdOutlineCheckBoxOutlineBlank />
                </td>
                <td>
                  <MdOutlineCheckBoxOutlineBlank />
                </td>
                <td>
                  <FaTrashAlt />
                </td>
              </tr>
              <tr>
                <td>John Doe 1 </td>
                <td>
                  <MdOutlineCheckBoxOutlineBlank />
                </td>
                <td>
                  <MdOutlineCheckBoxOutlineBlank />
                </td>
                <td>
                  <FaTrashAlt />
                </td>
              </tr>
              <tr>
                <td> John Doe 2 </td>
                <td>
                  <MdOutlineCheckBoxOutlineBlank />
                </td>
                <td>
                  <MdOutlineCheckBoxOutlineBlank />
                </td>
                <td>
                  <FaTrashAlt />
                </td>
              </tr>
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
