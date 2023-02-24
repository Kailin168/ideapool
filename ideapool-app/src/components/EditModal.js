import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";


function EditModal({ idea }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal animation={false}  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{idea.category}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{idea.content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;