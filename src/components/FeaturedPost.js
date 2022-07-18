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
  isFeatured,
  setIsFeatured,
}) => {
  const history = useHistory();
  const post = featuredPost;

  const [isAuthor, setIsAuthor] = useState(false);

  useEffect(() => {
    if (featuredPost.author === user._id || featuredPost.isAuthor) {
      setIsAuthor(true);
    }
  }, [featuredPost]);

  useEffect(() => {
    if (!isFeatured) {
      setFeaturedPost({});
    }
    console.log("----------------------", isFeatured, featuredPost);
  }, [isFeatured]);

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
