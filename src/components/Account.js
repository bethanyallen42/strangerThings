import React, { useState, useEffect } from "react";
import { LoginOrRegister, UserProfile } from "./index";

const Account = ({
  token,
  setToken,
  user,
  setUser,
  featuredPost,
  setFeaturedPost,
  displayPost,
  // activePosts,
  // setActivePosts,
}) => {
  return (
    <div className="page">
      {token && user ? (
        <UserProfile
          user={user}
          setToken={setToken}
          setUser={setUser}
          displayPost={displayPost}
          featuredPost={featuredPost}
          setFeaturedPost={setFeaturedPost}
          // activePosts={activePosts}
          // setActivePosts={setActivePosts}
        />
      ) : (
        <LoginOrRegister
          token={token}
          setToken={setToken}
          setUser={setUser}
          featuredPost={featuredPost}
          // activePosts={activePosts}
          // setActivePosts={setActivePosts}
        />
      )}
    </div>
  );
};

export default Account;
