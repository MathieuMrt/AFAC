import "./App.css";
import "./index.scss";
import React, { useEffect, useState, useMemo } from "react";
import jwtDecode from "jwt-decode";
import Router from "./navigation/Router";
import LoginContext from "./navigation/LoginContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Cookie from "./components/cookieConsent/CookieConsent";

function App() {
  // const logout = () => {
  //   setLoggedIn(false);
  //   localStorage.removeItem("token");
  // };

  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState({
    commentaire_bloque: "",
    estAdmin: "",
    id: "",
    mail: "",
    nom: "",
    prenom: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const utilisateur = jwtDecode(token);
      // console.warn("TOKEN UTILISATEUR", utilisateur.utilisateur);
      setUser(utilisateur.utilisateur);
      setIsConnected(true);
    }
  }, []);

  const loginContextValue = useMemo(
    () => ({ user, setUser, isConnected, setIsConnected, isAdmin, setIsAdmin }),
    [user]
  );
  console.warn("coucou", user);

  useEffect(() => {
    function disableRightClick(event) {
      if (event.target.tagName === "IMG") {
        event.preventDefault();
      }
    }
    document.addEventListener("contextmenu", disableRightClick); // Ajoute l'écouteur d'evènement lors du montage du composant
    return () => {
      document.removeEventListener("contextmenu", disableRightClick); // Supprime l'écouteur devenement au démontage du composant
    };
  }, []);

  return (
    <div className="App">
      <LoginContext.Provider value={loginContextValue}>
        <Header />
        <main className="app_main">
          <Router />
        </main>
        <Footer />
        <Cookie />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
