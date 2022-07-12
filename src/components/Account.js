import React, { useEffect, useState } from "react";
import { apiCall, loginOrRegister } from "../api";

const Account = ({ token, setToken, user, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let returnedToken;

    registered
      ? (returnedToken = await loginOrRegister("login", username, password))
      : (returnedToken = await loginOrRegister("register", username, password));

    // const userInfo = await apiCall("users/me", "GET", returnedToken);
    // console.log(userInfo);

    setToken(returnedToken);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await apiCall("users/me", "GET", token);
      console.log(userInfo, "USER!!!!!!!!!!!!!!");
      setUser(userInfo);
    };

    getUserInfo();
  }, [token]);

  return (
    <div className="page">
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
        Need to Register?
      </button>
    </div>
  );
};

export default Account;
