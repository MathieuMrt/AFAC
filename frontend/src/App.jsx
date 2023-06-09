import "./App.css";
import "./index.scss";
import Router from "./router/Router";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app_main">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
