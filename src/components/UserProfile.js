import React from "react";
import { useHistory } from "react-router-dom";
import { AuthorConsole } from ".";

const UserProfile = ({
  user,
  setToken,
  setUser,
  displayPost,
  featuredPost,
  setFeaturedPost,
}) => {
  console.log(user.posts);
  const activePosts = user.posts.filter((post) => post.active);
  const history = useHistory();
  console.log("filtered posts?", activePosts);

  const handleClick = (post) => {
    setFeaturedPost(post);
    history.push(`/posts/${post._id}`);
  };

  const handleClose = () => {
    setFeaturedPost({});
    history.push("/account");
  };

  return (
    <>
      <h1 className="accent1Background">{user.username}'s Profile</h1>

      <div className="box">
        <h2>Current Posts</h2>
        {activePosts.map((post) => {
          return (
            <div
              className="post"
              key={post._id}
              onClick={() => handleClick(post)}
            >
              {displayPost(post)}

              {/* <AuthorConsole
                featuredPost={featuredPost}
                handleClose={handleClose}
              /> */}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          setToken("");
          setUser(false);
          localStorage.clear();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default UserProfile;
