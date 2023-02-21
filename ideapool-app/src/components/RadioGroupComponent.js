import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function RadioGroupComponent({ category, setCategory, options }) {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Topics:
      </Form.Label>
      <Col sm={10}>
        {options.map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            checked={category === option}
            onChange={(event) => { setCategory(event.target.value) }}
            value={option}
          />
        ))}
      </Col>
    </Form.Group>

  );
}

export default RadioGroupComponent;