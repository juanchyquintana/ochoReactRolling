import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>

      <div className="bg-danger border border-black p-4">
        <h1 className="text-center text-uppercase text-white ">Formulario - Ejercicio 8</h1>
      </div>

      <Container>
        <Formulario />
      </Container>
    </>
  );
}

export default App;
