import React from "react"; 
import CreateNewIdeaForm from "./CreateNewIdeaForm";
import ListOfIdeas from "./ListOfIdeas";

function IdeaContainer() {

  const [ideas, setIdeas] = React.useState([]);


  const addNewIdea = (idea) => {
    setIdeas([...ideas, idea]);
  };

  return (
    <div>
      <CreateNewIdeaForm addNewIdea={addNewIdea}/>
      <ListOfIdeas ideas={ideas}/>
    </div>
  );
}

export default IdeaContainer; 
