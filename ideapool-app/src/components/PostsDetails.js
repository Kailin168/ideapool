import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";



function Details() {
  let params = useParams();

  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${params.postsId}`)
    //this access the id after the : in the path
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      });
  }, []);

  return (
    <div>
      <h1>Details Page</h1>
      <h2>{posts.content}</h2>
    </div>
  );
}

export default Details;
