import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Home, Posts, Login, Register } from "./index";

const App = () => {
  const BASE_URL =
    "https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt";

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const postsInfo = await response.json();
        console.log(postsInfo.data.posts);
        setPosts(postsInfo.data.posts);
      } catch (error) {
        console.error(error);
        console.log("Can't fetch posts");
      }
    };

    fetchPosts();
  }, []);

  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/posts">
        <Posts posts={posts} setPosts={setPosts} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </main>
  );
};

export default App;
