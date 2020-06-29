import React, { FC, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddItems: FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-light bg-dark">
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" />
          <Form.Label>Producto</Form.Label>
          <Form.Control as="select">
            <option>Cocina</option>
            <option>Manteleria</option>
            <option>Mobiliario</option>
            <option>Otros</option>
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

export default AddItems;
