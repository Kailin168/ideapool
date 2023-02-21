import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import RadioGroupComponent from "./RadioGroupComponent";

function CreateNewIdeaForm({ addNewIdea }) {
  const [ideaText, setIdeaText] = useState("");
  const [category, setCategory] = useState("");
  const [publicView, setPublicView] = useState(false);
  const [user_id, setUser_id] = useState(1);
  const [likes, setLikes] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();
    addNewIdea(ideaText);
    const addNewPost = {
      "content": ideaText,
      "category": category,
      "public": publicView,
      "user_id": "1",
      "likes": "0",
      "timestamps": Date.now()
    }
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addNewPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setIdeaText("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          New Idea
        </Form.Label>
        <Col sm={10}>
          <Form.Control value={ideaText} type="text" placeholder="New Ideas?" onChange={(event) => {
            setIdeaText(event.target.value);
          }} />
          {/* onChange={(event, value)=>{setIdeaText(value)}}  onChange={(value)=>setIdeaText(value)}*/}
        </Col>
      </Form.Group>
      <fieldset>
        <RadioGroupComponent
          category={category}
          setCategory={setCategory}
          options={["Math", "Science", "Technology", "Art"]} />
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check 
          label="Public"
          checked={publicView}
          onChange={(event) => {setPublicView(!publicView)}}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Create</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default CreateNewIdeaForm;