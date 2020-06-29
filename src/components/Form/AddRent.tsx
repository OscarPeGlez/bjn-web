import React, { FC, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const AddRent: FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Agregar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="date" />
          <Form.Label>Producto</Form.Label>
          <Form.Control as="select">
            <option>Cocina</option>
            <option>Manteleria</option>
            <option>Otros</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <Form.Label>Cantidad</Form.Label>
          <Form.Control type="number" />
          <Form.Label>Codigo</Form.Label>
          <Form.Control type="number" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="outline-info" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddRent;
