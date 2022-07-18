import React, { useState, useEffect } from "react";
import { LoginOrRegister, UserProfile } from "./index";

const Account = ({
  token,
  setToken,
  user,
  setUser,
  featuredPost,
  setFeaturedPost,
}) => {
  return (
    <div className="page">
      {token && user ? (
        <UserProfile
          user={user}
          setToken={setToken}
          setUser={setUser}
          featuredPost={featuredPost}
          setFeaturedPost={setFeaturedPost}
        />
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
