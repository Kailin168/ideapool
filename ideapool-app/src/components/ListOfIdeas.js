import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function ListOfIdeas({ ideas }) {
  return (
    <ListGroup as="ol" numbered>
      {ideas?.map((idea) => (
        <ListGroup.Item
          key={idea}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Ideas</div>
            {idea}
          </div>
          <BsFillArrowUpCircleFill />{' '}
          <BsFillArrowDownCircleFill />{' '}
        </ListGroup.Item>
      )

      )}
    </ListGroup>);
}

export default ListOfIdeas;