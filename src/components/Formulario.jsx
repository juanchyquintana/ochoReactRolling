import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <>
      <section className="mt-3 bg-white mt-5 p-4 rounded shadow">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca sus nombres"
              minLength={3}
              maxLength={100}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca sus apellidos"
              minLength={3}
              maxLength={100}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="number"
              placeholder="Introduzca su DNI"
              maxLength={8}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="correo@correo.com"
              maxLength={60}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button
            variant="danger"
            type="submit"
            className="text-uppercase fw-bold w-100"
          >
            Enviar
          </Button>
        </Form>
      </section>
    </>
  );
};

export default Formulario;
