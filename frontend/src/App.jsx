import "./App.css";
import "./index.scss";
import React, { useEffect } from "react";
import Router from "./router/Router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Cookie from "./components/cookieConsent/CookieConsent";

function App() {
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
      <Header />
      <main className="app_main">
        <Router />
      </main>
      <Footer />
      <Cookie />
    </div>
  );
}

export default App;
