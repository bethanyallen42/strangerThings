import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apiCall } from "../api";
import { NewPost } from "./index";

const Posts = ({
  posts,
  setPosts,
  featuredPost,
  setFeaturedPost,
  displayPost,
  token,
  user,
}) => {
  const [search, setSearch] = useState("");
  const [makeNewPost, setMakeNewPost] = useState(false);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const postInfo = await apiCall("posts", "GET", token);
      setPosts(postInfo.data.posts);
    })();
  }, [user]);

  const handleClick = (post) => {
    setFeaturedPost(post);
    history.push(`/posts/${post._id}`);
  };

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
        <NewPost
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
            <div
              className="post"
              key={post._id}
              onClick={() => handleClick(post)}
            >
              {displayPost(post)}
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
