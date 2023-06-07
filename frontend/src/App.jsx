import "./App.css";
import "./index.scss";
import Router from "./router/Router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Description from "./components/description/Description";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <main className="app_main">
        <Description />
        <Footer />
      </main>
    </div>
  );
}

export default App;
