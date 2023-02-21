import React, { useEffect, useState } from "react";
import CreateNewIdeaForm from "./CreateNewIdeaForm";
import ListOfIdeas from "./ListOfIdeas";

function IdeaContainer() {

  const [ideas, setIdeas] = useState([]);


  const addNewIdea = (idea) => {
    setIdeas([...ideas, idea]);
  };

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => { setIdeas(data) });
  }, []);


  return (
    <div>
      <CreateNewIdeaForm addNewIdea={addNewIdea} />
      <ListOfIdeas ideas={ideas} />
    </div>
  );
}

export default IdeaContainer; 
