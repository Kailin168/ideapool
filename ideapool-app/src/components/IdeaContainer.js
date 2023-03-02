import React, { useEffect, useState } from "react";

// import MySpinner from "../commons/Spinner";
import CreateNewIdeaForm from "./CreateNewIdeaForm";
import ListOfIdeas from "./ListOfIdeas";
import SearchBar from "./SearchBar";
import { makeRequest } from "../commons/Util";

function IdeaContainer() {

  const [ideas, setIdeas] = useState([]);

  const addNewIdea = (idea) => {
    setIdeas([...ideas, idea]);
  };

  const fetchFromServer = async () => {
    try {
      const data = await makeRequest('posts');
      setIdeas(data);
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    // fetch('http://localhost:4000/posts',
    // {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'ngrok-skip-browser-warning': 'true',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setIdeas(data)
    //   });

  fetchFromServer();     

  }, []);

  return (
    <div>
      <CreateNewIdeaForm addNewIdea={addNewIdea} />
      <SearchBar ideas={ideas} />
      {ideas.length !== 0 && <ListOfIdeas ideas={ideas} setIdeas={setIdeas} />}
    </div>
  );
}

export default IdeaContainer; 
