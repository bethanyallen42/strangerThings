import React from "react";
import LoginOrRegister from "./LoginOrRegister";
import UserProfile from "./UserProfile";

const Account = ({ token, setToken, user, setUser }) => {
  return (
    <div className="page">
      {token && user ? (
        <UserProfile user={user} setToken={setToken} setUser={setUser} />
      ) : (
        <LoginOrRegister token={token} setToken={setToken} setUser={setUser} />
      )}
    </div>
  );
};

export default Account;
