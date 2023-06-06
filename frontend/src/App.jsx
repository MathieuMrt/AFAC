import "./App.css";
import "./index.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Accueil from "./components/accueil/Accueil";

function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <Footer />
    </div>
  );
}

export default App;
