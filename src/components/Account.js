import React from "react";
import { LoginOrRegister, UserProfile } from "./index";

const Account = ({
  token,
  setToken,
  user,
  setUser,
  featuredPost,
  setFeaturedPost,
  displayPost,
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
