import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {  useState} from 'react';

export const Aviso = () => {
    const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
        {/* Modal de aviso */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Para nuestros clientes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Las ordenes van en fila, por favor se paciente.
          Gracias por tu comprensión.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Aviso;