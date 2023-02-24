import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
// import SortDropdown from './SortDropDown';

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function ListOfIdeas({ ideas }) {

  const [sortKey, setSortKey] = useState('content');

  const sortedArray = (type => {
    const types = {
      idea: 'content',
      category: 'category',
      likes: 'likes',
    };
    const sortProperty = types[type];
    const sorted = ideas.sort((a, b) => a[sortProperty] < b[sortProperty] ? -1 : 1);
    return sorted;
  })(sortKey);

  // iffe so you are passing in the sortKey as a parameter to the function and executing the function immediately. 

  return (
    <div>
      <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
        <option value="idea">idea</option>
        <option value="category">category</option>
        <option value="likes">likes</option>
      </select>
      <ListGroup as="ol" numbered>
        {sortedArray.map((idea) => (
          <ListGroup.Item
            key={idea.id}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Ideas</div>
              {idea.content}
              {idea.category}
            </div>
            <BsFillArrowUpCircleFill />{' '}
            <BsFillArrowDownCircleFill />{' '}
          </ListGroup.Item>
        )
        )}
      </ListGroup>
    </div>
  );

}

export default ListOfIdeas;