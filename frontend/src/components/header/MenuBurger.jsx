import { NavLink } from "react-router-dom";

function MenuBurger() {
  return (
    <div className="menuBurger">
      <button className="mb_burger" type="button">
        <span className="mb_bar" />
        <span className="mb_bar" />
        <span className="mb_bar" />
      </button>

      <NavLink to="/">
        <img
          className="mb_header_logo"
          src="../../src/assets/img/AFAC974_Logo_600x237nega.png"
          alt="logo AFAC"
        />
      </NavLink>
      <nav className="mb_navbar">
        <NavLink className="mb_navlinks" to="/">
          ACCUEIL
        </NavLink>
        <NavLink className="mb_navlinks" to="/galerie">
          GALERIE
        </NavLink>
        <NavLink className="mb_navlinks" to="/apropos">
          A PROPOS
        </NavLink>
        <NavLink className="mb_navlinks" to="/galerie/:id/favoris">
          FAVORIS
        </NavLink>
        <NavLink to="/compte">
          <button type="button" className="mb_connexion">
            Connexion
          </button>
        </NavLink>
      </nav>
    </div>
  );
}

export default MenuBurger;
