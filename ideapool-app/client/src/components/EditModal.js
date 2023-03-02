import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import Spinner from '../commons/Spinner';



function EditModal({ idea, setIdeas }) {

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(idea.content);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const updateServerWithNewContent = () => {
    setIsLoading(true);
    // this will start the spinner loading when the user clicks on the Save Changes button.
    setErrorMessage('');
    // clear the previous error message if there is any.
    fetch(`http://localhost:4000/posts/${idea.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // this will close the modal after the server responds back with success. and if successful, close the modal.
        setShow(false);
      })
      .catch((error) => {
        setErrorMessage(`Error: ${error.message ? error.message : "Something went wrong"}`);
        // this sets the error message to the error message from the server or to a default message if there is no error message from the server.
      })
      .finally(() => {
        // the finally block will always be executed regardless of the outcome of the try and catch blocks. 
        // spinner will stop loading when server responds back either with success or error.
        setIsLoading(false);
        
      });
  };


  const handleSubmit = () => {
    updateServerWithNewContent();

    setIdeas(newideas => newideas.map(newidea => {
      if (idea.id === newidea.id) {
        return { ...idea, content: content }
      }
      return newidea;
    }));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Spinner isShowing={isLoading}/>
        <Modal.Header >
          <Modal.Title>{idea.category}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value={content} onChange={(event) => setContent(event.target.value)} />
          <div>{errorMessage}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;