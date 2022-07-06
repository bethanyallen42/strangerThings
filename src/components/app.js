import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Home, Posts, Login, Register } from "./index";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
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
