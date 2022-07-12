import React, { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import { Home, Posts, Account } from "./index";
import "../styles.css";

const App = () => {
  const BASE_URL =
    "https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt";

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(false);
  const [token, setToken] = useState("");
  console.log("in my app", user, user.username);

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
        <Account
          user={user}
          setUser={setUser}
          token={token}
          setToken={setToken}
        />
      </Route>
    </main>
  );
};

export default App;
