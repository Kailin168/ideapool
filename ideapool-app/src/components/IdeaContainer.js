import React, { useEffect, useState } from "react";
// import MySpinner from "../commons/Spinner";
import CreateNewIdeaForm from "./CreateNewIdeaForm";
import ListOfIdeas from "./ListOfIdeas";
import SearchBar from "./SearchBar";
import Cookies from 'js-cookie';


function IdeaContainer() {

  const [ideas, setIdeas] = useState([]);


  const addNewIdea = (idea) => {
    setIdeas([...ideas, idea]);
  };

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(data => {
        setIdeas(data)
        Cookies.set('myCookie', 'cookieValue', { expires: 7 });
        // Retrieve the cookie value when the component mounts
        const myCookie = Cookies.get('myCookie');
        console.log(myCookie);
      });

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
