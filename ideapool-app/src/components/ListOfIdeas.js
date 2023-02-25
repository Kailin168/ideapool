import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import EditModal from './EditModal';
import Pagination from './Pagination';

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";


function ListOfIdeas({ ideas, setIdeas }) {

  const [sortKey, setSortKey] = useState('content');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

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

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = sortedArray.slice(startIndex, endIndex);



  return (
    <div>
      <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
        <option value="idea">idea</option>
        <option value="category">category</option>
        <option value="likes">likes</option>
      </select>
      <ListGroup as="ol">
        {visibleItems.map((idea) => (
          <ListGroup.Item
            key={idea.id}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Ideas</div>
              {idea.content}
              {idea.category}
              < EditModal idea={idea} setIdeas={setIdeas} />
            </div>
            <BsFillArrowUpCircleFill />{' '}
            <BsFillArrowDownCircleFill />{' '}
          </ListGroup.Item>
        )
        )}
      </ListGroup>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedArray.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );

}

export default ListOfIdeas;