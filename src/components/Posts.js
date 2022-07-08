import React from "react";

const Posts = ({ posts, setPosts }) => {
  console.log(posts, "posts!!!!!!!!!!!!!!!!");
  return (
    <div className="page">
      <h1>Items for Sale</h1>
      {posts.map((post) => {
        {
          console.log(
            "location",
            post.location,
            "author",
            post.author,
            "willDeliver",
            post.willDeliver
          );
        }
        return (
          <div key={post._id} className="post">
            <div className="postHeader">
              <h2>{post.title}</h2>
              <p>{post.price}</p>
            </div>
            <p className="postDescription">{post.description}</p>
            <div className="postFooter">
              <p>Location: {post.location ? post.location : "On Request"}</p>
              <p>Author: {post.author.username}</p>
              <p>{post.willDeliver && "Will Deliver"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
