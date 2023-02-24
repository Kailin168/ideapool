import React, { useEffect, useState } from "react";
import MySpinner from "../commons/Spinner";
import CreateNewIdeaForm from "./CreateNewIdeaForm";
import ListOfIdeas from "./ListOfIdeas";
import SearchBar from "./SearchBar";

function IdeaContainer() {

  const [ideas, setIdeas] = useState([]);
 

  const addNewIdea = (idea) => {
    setIdeas([...ideas, idea]);
  };

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(data => { setIdeas(data) });
  }, []);

  return (
    <div>
      <CreateNewIdeaForm addNewIdea={addNewIdea} />
      { ideas.length !== 0 && <ListOfIdeas ideas={ideas} setIdeas={setIdeas}/> }
      <SearchBar ideas={ideas}/>
    </div>
  );
}

export default IdeaContainer; 
