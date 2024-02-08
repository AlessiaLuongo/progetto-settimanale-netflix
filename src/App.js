import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import ComponentNavbar from "./components/ComponentNavbar";
import ComponentFiltro from "./components/ComponentFiltro";
import ComponentSection from "./components/ComponentSection";
import ComponentFooter from "./components/ComponentFooter";
import ComponentProfile from "./components/ComponentProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentDetail from "./components/ComponentDetail";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <ComponentNavbar></ComponentNavbar>
        </header>
        <main>
          <ComponentFiltro></ComponentFiltro>

          <Routes>
            <Route
              element={
                <>
                  <h3> Film preferiti </h3>
                  <ComponentSection cerca="hannibal" />
                  <h3> Film consigliati </h3>
                  <ComponentSection cerca="top" />
                  <h3> Film piaciuti </h3>
                  <ComponentSection cerca="Star Wars" />
                </>
              }
              path="/"
            />
          </Routes>
        </main>
        <Routes>
          <Route element={<ComponentProfile />} path="/profile" />
          <Route element={<ComponentDetail />} path="/detail/:filmId" />
        </Routes>
        <footer>
          <ComponentFooter></ComponentFooter>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
