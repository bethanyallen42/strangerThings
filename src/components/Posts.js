import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apiCall } from "../api";
import { CreateOrEditPost, Post } from "./index";

const Posts = ({
  posts,
  setPosts,
  featuredPost,
  setFeaturedPost,
  token,
  user,
  setUser,
  makeNewPost,
  setMakeNewPost,
  isFeatured,
  setIsFeatured,
}) => {
  const [search, setSearch] = useState("");

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const postInfo = await apiCall("posts", "GET", token);
      setPosts(postInfo.data.posts);
    })();
  }, [user]);

  return (
    <div className="page">
      <div className="pageHeader">
        <h1>Items for Sale</h1>
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text"
          name="search"
          placeholder="search posts"
        />
        {token && (
          <button onClick={() => setMakeNewPost(true)}>
            Post an item for sale
          </button>
        )}
      </div>
      {token && makeNewPost && (
        <CreateOrEditPost
          setUser={setUser}
          makeNewPost={makeNewPost}
          setMakeNewPost={setMakeNewPost}
          token={token}
          setPosts={setPosts}
        />
      )}
      {posts
        .filter((post) => {
          return `${post.description} ${post.title} ${post.location} ${post.author.username}`
            .toLowerCase()
            .includes(`${search}`);
        })
        .map((post) => {
          return (
            <Post
              key={post._id}
              post={post}
              featuredPost={featuredPost}
              setFeaturedPost={setFeaturedPost}
              token={token}
              user={user}
              posts={posts}
              isFeatured={isFeatured}
              setIsFeatured={setIsFeatured}
            />
          );
        })}
    </div>
  );
};

export default Posts;
