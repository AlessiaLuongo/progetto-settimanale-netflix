import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import ComponentNavbar from "./components/ComponentNavbar";
import ComponentFiltro from "./components/ComponentFiltro";
import ComponentSection from "./components/ComponentSection";
import ComponentFooter from "./components/ComponentFooter";

function App() {
  return (
    <div className="App">
      <header>
        <ComponentNavbar></ComponentNavbar>
      </header>
      <main>
        <ComponentFiltro></ComponentFiltro>
        <h3> Film preferiti </h3>
        <ComponentSection cerca="hannibal"></ComponentSection>
        <h3> Film consigliati </h3>
        <ComponentSection cerca="top"></ComponentSection>
        <h3> Film piaciuti </h3>
        <ComponentSection cerca="harry"></ComponentSection>
      </main>
      <footer>
        <ComponentFooter></ComponentFooter>
      </footer>
    </div>
  );
}

export default App;
