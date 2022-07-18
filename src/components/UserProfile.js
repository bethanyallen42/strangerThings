import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthorConsole } from ".";
import { Post } from "./index";

const UserProfile = ({
  user,
  setToken,
  setUser,
  setFeaturedPost,
  posts,
  isFeatured,
  setIsFeatured,
}) => {
  const history = useHistory();
  const [activePosts, setActivePosts] = useState([]);

  useEffect(() => {
    if (user) {
      setActivePosts(user.posts.filter((post) => post.active));
      console.log("I just logged in", activePosts);
    }
  }, [user]);

  return (
    <>
      <h1 className="accountHeader">{user.username}'s Profile</h1>

      <div className="box">
        <h2>Current Posts</h2>

        {activePosts.map((post) => {
          return (
            <Post
              key={post._id}
              post={post}
              setFeaturedPost={setFeaturedPost}
              posts={posts}
              isFeatured={isFeatured}
              setIsFeatured={setIsFeatured}
              user={user}
            />
          );
        })}
      </div>

      <button
        onClick={() => {
          setToken("");
          setUser(false);
          setActivePosts([]);
          localStorage.clear();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default UserProfile;
