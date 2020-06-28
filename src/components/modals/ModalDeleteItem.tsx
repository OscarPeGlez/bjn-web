import React, { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';


type ModalProps = {
  show: boolean;
  confirmation: () => void;
  noConfirmation: () => void;
};

const ModalDeleteItem: FC<ModalProps> = props => {

  const { confirmation, noConfirmation, show } = props;
  return (
    <>
      <Modal show={show} onHide={noConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Articulo</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estas seguro de eliminar el articulo?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={confirmation}>
            SI
          </Button>
          <Button variant="primary" onClick={noConfirmation}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteItem;
