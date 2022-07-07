import React from "react";

const Posts = ({ posts, setPosts }) => {
  console.log(posts, "posts!!!!!!!!!!!!!!!!");
  return (
    <div>
      Hi
      {posts.map((post, index) => {
        console.log(index, post.description, "???????");
        return <div key={post._id}>{post._id}</div>;
      })}
    </div>
  );
};

export default Posts;
