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
  const [makeNewPost, setMakeNewPost] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  
  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user")).data;
      const savedToken = localStorage.getItem("token");
      console.log("savedToken", savedToken);
      setUser(savedUser);
      setToken(savedToken);
    } catch (error) {
      console.error();
    }
  }, []);

  useEffect(() => {
    console.log("!!!!!!!!!!!!!!!!!!!", token);
  }, [token]);

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
          token={token}
          user={user}
          setUser={setUser}
          makeNewPost={makeNewPost}
          setMakeNewPost={setMakeNewPost}
          isFeatured={isFeatured}
          setIsFeatured={setIsFeatured}
        />
        <Route path="/posts/:postId">
          {featuredPost && (
            <FeaturedPost
              featuredPost={featuredPost}
              setFeaturedPost={setFeaturedPost}
              token={token}
              user={user}
              posts={posts}
              setPosts={setPosts}
              setUser={setUser}
              isFeatured={isFeatured}
              setIsFeatured={setIsFeatured}
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
          isFeatured={isFeatured}
          setIsFeatured={setIsFeatured}
        />
        <Route path="/account/:postId">
          {featuredPost && (
            <FeaturedPost
              featuredPost={featuredPost}
              setFeaturedPost={setFeaturedPost}
              token={token}
              user={user}
              setUser={setUser}
              posts={posts}
              setPosts={setPosts}
              isFeatured={isFeatured}
              setIsFeatured={setIsFeatured}
            />
          )}
        </Route>
      </Route>
    </main>
  );
};

export default App;
