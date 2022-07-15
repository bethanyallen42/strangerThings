import React, { useState, useEffect } from "react";
import { apiCall, loginOrRegister } from "../api";
import { useHistory } from "react-router-dom";

const LoginOrRegister = ({ token, setToken, setUser, featuredPost }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const history = useHistory();

    let returnedToken;

    registered
      ? (returnedToken = await loginOrRegister("login", username, password))
      : (returnedToken = await loginOrRegister("register", username, password));

    await setToken(returnedToken);

    // if (featuredPost) {
    //   history.push(`/posts/${featuredPost._id}`);
    // }
  };

  useEffect(() => {
    if (token) {
      (async () => {
        const userInfo = await apiCall("users/me", "GET", token);
        setUser(userInfo.data);
      })();
    }
  }, [token]);

  return (
    <>
      <h1>{registered ? "Login" : "Register"}</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          required
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" name="" id="" />
      </form>
      <button onClick={() => setRegistered(!registered)}>
        {registered ? "Need to Register?" : "Already Registered?"}
      </button>
    </>
  );
};

export default LoginOrRegister;
