import React from "react"; 
import CreateNewIdeaForm from "./CreateNewIdeaForm";
import ListOfIdeas from "./ListOfIdeas";

function IdeaContainer() {
  return (
    <div>
      <CreateNewIdeaForm />
      <ListOfIdeas />
    </div>
  );
}

export default IdeaContainer; 
