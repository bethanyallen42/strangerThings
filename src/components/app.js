import React, { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import { Home, Posts, Account, FeaturedPost, NewPost } from "./index";
import "../styles.css";
import { apiCall } from "../api";

const App = () => {
  const BASE_URL =
    "https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt";

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(false);
  const [token, setToken] = useState("");
  const [featuredPost, setFeaturedPost] = useState({});

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user")).data;
      const savedToken = localStorage.getItem("token");
      setUser(savedUser);
      setToken(savedToken);
    } catch (error) {
      console.error();
    }
  }, []);

  //should this be changed to a component?? how to use the variable?
  const displayPost = (post) => {
    return (
      <>
        <div className="postHeader">
          <h2>{post.title && post.title}</h2>
          <p>{post.price && post.price}</p>
        </div>
        <p className="postDescription">
          {post.description && post.description}
        </p>
        <div className="postFooter">
          <p>Location: {post.location ? post.location : "On Request"}</p>
          <p>Author: {post.author.username && post.author.username}</p>
          <p>{post.willDeliver ? "Will Deliver" : "Must Pickup"}</p>
        </div>
      </>
    );
  };

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
        <Posts
          posts={posts}
          setPosts={setPosts}
          featuredPost={featuredPost}
          setFeaturedPost={setFeaturedPost}
          displayPost={displayPost}
          token={token}
          user={user}
        />
        <Route path="/posts/:postId">
          {featuredPost && (
            <FeaturedPost
              featuredPost={featuredPost}
              setFeaturedPost={setFeaturedPost}
              displayPost={displayPost}
              token={token}
              user={user}
              posts={posts}
              setPosts={setPosts}
            />
          )}
        </Route>
      </Route>
      <Route path="/account">
        <Account
          user={user}
          setUser={setUser}
          token={token}
          setToken={setToken}
          featuredPost={featuredPost}
          setFeaturedPost={setFeaturedPost}
          displayPost={displayPost}
        />
        <Route path="/posts/:postId">
          {featuredPost && (
            <FeaturedPost
              featuredPost={featuredPost}
              setFeaturedPost={setFeaturedPost}
              displayPost={displayPost}
              token={token}
              user={user}
              posts={posts}
              setPosts={setPosts}
            />
          )}
        </Route>
      </Route>
    </main>
  );
};

export default App;
