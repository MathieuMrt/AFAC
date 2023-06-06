import "./App.css";
import "./index.scss";
import Router from "./router/Router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <div className="header_main">
        <Header />
        <Router />;
        <main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
