import React, { useState, useEffect } from "react";
import { LoginOrRegister, UserProfile } from "./index";

const Account = ({
  token,
  setToken,
  user,
  setUser,
  featuredPost,
  setFeaturedPost,
  isFeatured,
  setIsFeatured,
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
          isFeatured={isFeatured}
          setIsFeatured={setIsFeatured}
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
