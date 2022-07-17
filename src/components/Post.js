import React from "react";

const Post = () => {
  const handleClick = (post) => {
    setFeaturedPost(post);
    history.push(`/posts/${post._id}`);
  };

  return (
    <div className="post" key={post._id} onClick={() => handleClick(post)}>
      <div className="postHeader">
        <h2>{post.title && post.title}</h2>
        <p>{post.price && post.price}</p>
      </div>
      <p className="postDescription">{post.description && post.description}</p>
      <div className="postFooter">
        <p>Location: {post.location ? post.location : "On Request"}</p>
        <p>Author: {post.author.username && post.author.username}</p>
        <p>{post.willDeliver ? "Will Deliver" : "Must Pickup"}</p>
      </div>
    </div>
  );
};

export default Post;
