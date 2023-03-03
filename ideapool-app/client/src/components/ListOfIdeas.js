import React, { useEffect, useState, useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import EditModal from './EditModal';
import Pagination from './Pagination';
import { useNavigate } from "react-router-dom";
import MyContext from '../context/MyContext';
import { makeRequest } from "../commons/Util";


function ListOfIdeas({ ideas, setIdeas }) {

  const contextData = useContext(MyContext);


  // const [sortKey, setSortKey] = useState('content');
  const [currentPage, setCurrentPage] = useState(1);
  const [likes, setLikes] = useState(0);

  let navigate = useNavigate();

  const showPostsDetails = (idea) => {
    const path = `/posts/${idea.id}`;
    navigate(path);
  }


  const itemsPerPage = 5;

  const sortedArray = (type => {
    const types = {
      idea: 'content',
      category: 'category',
      likes: 'likes',
    };
    const sortProperty = types[type];
    const sorted = ideas.sort((a, b) => {
      if (a[sortProperty] === b[sortProperty]) {
        return a.content < b.content ? 1 : -1
      }
      return a[sortProperty] < b[sortProperty] ? 1 : -1
    });
    return sorted;
  })(contextData.sortedCategoryType);

  // iffe so you are passing in the sortKey as a parameter to the function and executing the function immediately. 

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = sortedArray.slice(startIndex, endIndex);


  // function handleLikes(idea) {
  //   idea.likes = idea.likes + 1;
  //   setIdeas([...ideas]);
  //   fetch(`http://localhost:4000/posts/${idea.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'ngrok-skip-browser-warning': 'true',
  //     },
  //     body: JSON.stringify({ likes: idea.likes }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Success:', data);
  //     });
  // }

  async function handleLikes(idea) {
    idea.likes = idea.likes + 1;
    setIdeas([...ideas]);
    try {
      await makeRequest(`posts/${idea.id}`, 'PATCH', {}, { likes: idea.likes });
    } catch (error) {
      console.log(error);
    }
  }

  // function handleDislikes(idea) {
  //   idea.likes = idea.likes - 1;
  //   setIdeas([...ideas]);
  //   fetch(`http://localhost:4000/posts/${idea.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ likes: idea.likes }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Success:', data);
  //     });
  // }

  async function handleDislikes(idea) {
    idea.likes = idea.likes - 1;
    setIdeas([...ideas]);
    try {
      await makeRequest(`posts/${idea.id}`, 'PATCH', {}, { likes: idea.likes });
    } catch (error) {
      console.log(error);
    }
  }



  // const handleLikes = (idea) => {
  //   return () => {
  //     // this returns a function that will be called when the button is clicked with this onClick={handleLikes(idea)}
  //     fetch(`http://localhost:4000/posts/${idea.id}`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ likes: idea.likes + 1 }),
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log('Success:', data);
  //         setIdeas(data);
  //       });
  //   };
  // };

  return (
    <div>
      <select value={contextData.sortedCategoryType} onChange={(e) => contextData.setSortedCategoryType(e.target.value)}>
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
              <div style={{ cursor: "pointer" }} onClick={() => { showPostsDetails(idea) }} className="fw-bold">Ideas</div>
              <div className='idea-content'>
                {idea.content}
              </div>
              <div className='idea-category'>
                {idea.category}
              </div>
              < EditModal idea={idea} setIdeas={setIdeas} />
            </div>
            <BsFillArrowUpCircleFill onClick={() => { handleLikes(idea) }} />{' '}
            {idea.likes}
            <BsFillArrowDownCircleFill onClick={() => { handleDislikes(idea) }} />{' '}
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