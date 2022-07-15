import React from "react";
import { LoginOrRegister, UserProfile } from "./index";

const Account = ({ token, setToken, user, setUser, featuredPost }) => {
  return (
    <div className="page">
      {token && user ? (
        <UserProfile user={user} setToken={setToken} setUser={setUser} />
      ) : (
        <LoginOrRegister
          token={token}
          setToken={setToken}
          setUser={setUser}
          featuredPost={featuredPost}
        />
      )}
    </div>
  );
};

export default Account;
