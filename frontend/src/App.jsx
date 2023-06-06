import "./App.css";
import "./index.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <div className="header_main">
        <Header />
        <main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
