import "./App.css";
import "./index.scss";
import Router from "./router/Router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Accueil from "./components/accueil/Accueil";

function App() {
  return (
    <div className="App">

      <Header />
        <Header />
        <Router />;
        <main />
      <Footer />
    </div>
  );
}

export default App;
