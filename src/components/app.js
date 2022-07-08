import React, { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import { Home, Posts, Account } from "./index";
import "../styles.css";
import { apiCall } from "../api";

const App = () => {
  const BASE_URL =
    "https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt";

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      const postInfo = await apiCall("posts");
      setPosts(postInfo.data.posts);
    })();
  }, []);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/posts`);
  //       const postsInfo = await response.json();
  //       console.log(postsInfo.data.posts);
  //       setPosts(postsInfo.data.posts);
  //     } catch (error) {
  //       console.error(error);
  //       console.log("Can't fetch posts");
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <main>
      <nav>
        <NavLink exact to="/" className="navLink" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/posts" className="navLink" activeClassName="active">
          Posts
        </NavLink>
        <NavLink to="/account" className="navLink" activeClassName="active">
          Account
        </NavLink>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/posts">
        <Posts posts={posts} setPosts={setPosts} />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
    </main>
  );
};

export default App;
