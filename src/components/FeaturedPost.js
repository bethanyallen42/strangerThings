import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiCall } from "../api";
import { AuthorConsole, Post } from ".";

const FeaturedPost = ({
  featuredPost,
  setFeaturedPost,
  token,
  user,
  setUser,
  posts,
  setPosts,
}) => {
  const history = useHistory();
  const post = featuredPost;

  const [isAuthor, setIsAuthor] = useState(false);
  const [isFeatured, setIsFeatured] = useState(true);
  console.log("featured post", featuredPost);
  console.log("user", user);
  console.log("path", window.location.pathname.includes("account"));

  useEffect(() => {
    if (featuredPost.author === user._id || featuredPost.isAuthor) {
      console.log("I am the author");
      setIsAuthor(true);
    }
    console.log(featuredPost.isAuthor);
  }, [featuredPost]);

  return (
    <div className="wrapper">
      <Post
        post={post}
        isFeatured={isFeatured}
        setIsFeatured={setIsFeatured}
        featuredPost={featuredPost}
        setFeaturedPost={setFeaturedPost}
        token={token}
        user={user}
        setUser={setUser}
        isAuthor={isAuthor}
        posts={posts}
        setPosts={setPosts}
      />
    </div>
  );
};

export default FeaturedPost;
