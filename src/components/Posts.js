import React, { useState } from "react";

const Posts = ({ posts, setPosts }) => {
  console.log(posts, "posts!!!!!!!!!!!!!!!!");

  const [search, setSearch] = useState("");

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
      </div>
      {posts
        .filter((post) => {
          return `${post.description} ${post.title} ${post.location} ${post.author.username}`
            .toLowerCase()
            .includes(`${search}`);
        })
        .map((post) => {
          return (
            <div key={post._id} className="post">
              <div className="postHeader">
                <h2>{post.title && post.title}</h2>
                <p>{post.price && post.price}</p>
              </div>
              <p className="postDescription">
                {post.description && post.description}
              </p>
              <div className="postFooter">
                <p>Location: {post.location ? post.location : "On Request"}</p>
                <p>Author: {post.author.username && post.author.username}</p>
                <p>{post.willDeliver ? "Will Deliver" : "Must Pickup"}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
