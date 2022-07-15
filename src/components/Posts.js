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
}) => {
  console.log(posts, "posts!!!!!!!!!!!!!!!!");

  const [search, setSearch] = useState("");
  const [makeNewPost, setMakeNewPost] = useState(false);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const postInfo = await apiCall("posts");
      console.log(postInfo, postInfo);
      setPosts(postInfo.data.posts);
    })();
  }, []);

  const handleClick = (post) => {
    setFeaturedPost(post);
    history.push(`/posts/${post._id}`);
  };

  return (
    <div className="page">
      <div className="pageHeader">
        <h1>Items for Sale</h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
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
        <NewPost setMakeNewPost={setMakeNewPost} token={token} />
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
              {/* Include something to indicate if it is the user's post*/}
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
