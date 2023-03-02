import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { makeRequest } from "../commons/Util";


function Details() {
  let params = useParams();

  const [posts, setPosts] = useState({});

  // useEffect(() => {
  //   fetch(`http://localhost:4000/posts/${params.postsId}`)
  //   //this access the id after the : in the path
  //     .then(response => response.json())
  //     .then(data => {
  //       setPosts(data)
  //     });
  // }, []);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     try {
  //       // the try catch is to catch any errors that might occur during the fetch
  //       const response = await fetch(`http://localhost:4000/posts/${params.postsId}`);
  //       // wait for the fetch response to return as a response object from this access the id after the : in the path
  //       const data = await response.json();
  //       // wait for the response object to return and parse it to json object
  //       setPosts(data);
  //     }
  //     catch (error) {
  //       console.log(error);
  //       // if there is an error, log it to the console
  //     } 
  //   }
  //   fetchPosts();
  // }, []);

  const fetchPosts = async () => {
    try {
      const data = await makeRequest(`posts/${params.postsId}`);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Details Page</h1>
      <h2>{posts.content}</h2>
    </div>
  );
}

export default Details;
