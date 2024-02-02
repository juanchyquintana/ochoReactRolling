import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Error from "./Error";
import Exito from "./Exito";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Se validan los campos
    if ([nombre, apellido, dni, email].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // Limpiar Formulario
    setNombre("");
    setApellido("");
    setDni("");
    setEmail("");

    setExito(true);

    setTimeout(() => {
      setExito(false);
    }, 3000);
  };

  return (
    <>
      <section className="mt-3 bg-white mt-5 p-4 rounded shadow">
        <Form onSubmit={handleSubmit}>

          {error && <Error>Hay campos vácios</Error>}
          {exito && <Exito>Datos enviados correctamente</Exito>}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca sus nombres"
              minLength={3}
              maxLength={100}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca sus apellidos"
              minLength={3}
              maxLength={100}
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="number"
              placeholder="Introduzca su DNI"
              maxLength={8}
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="correo@correo.com"
              maxLength={60}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="danger"
            type="submit"
            className="text-uppercase fw-bold w-100 mt-3"
          >
            Enviar
          </Button>
        </Form>
      </section>
    </>
  );
};

export default Formulario;
