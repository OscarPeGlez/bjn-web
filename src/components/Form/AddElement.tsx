import React, { FC, useState } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FileUpload from '../FileUpload';

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
          <Modal.Title>Añadir Articulo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Nombre del Articulo</Form.Label>
          <Form.Control type="text" />
          <Form.Label>Tipo de producto</Form.Label>
          <Form.Control as="select">
            <option>Cocina</option>
            <option>Manteleria</option>
            <option>Mobiliario</option>
            <option>Otros</option>
          </Form.Control>
          <Form.Row>
            <Col>
              <Form.Label>Cantidad </Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col>
              <Form.Label>Tipo de producto</Form.Label>
              <Form.Control as="select">
                <option>Cocina</option>
                <option>Manteleria</option>
                <option>Mobiliario</option>
                <option>Otros</option>
              </Form.Control>
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.Label>Codigo SKU</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Subir imagen</Form.Label>
            <FileUpload />
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

export default AddItems;
