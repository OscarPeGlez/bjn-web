import React, { FC, useState } from 'react';
import { Button, Form, Modal, Col } from 'react-bootstrap';

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
        <Modal.Header className="text-light bg-dark">
          <Modal.Title>Añadir Renta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            <Col>
              <Form.Label>Fecha esperada de entrega</Form.Label>
              <Form.Control type="date" />
            </Col>
            <Col>
              <Form.Label>Fecha esperada de devolución</Form.Label>
              <Form.Control type="date" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>Total de renta</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col>
              <Form.Label>Anticipo</Form.Label>
              <Form.Control type="number" />
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.Label>Pagador</Form.Label>
            <Form.Control maxLength={50} type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control maxLength={50} type="text" />
          </Form.Group>
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
