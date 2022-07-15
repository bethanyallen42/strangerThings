import React, { useState } from "react";
import { apiCall } from "../api";

const NewPost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("On Request");
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      post: {
        title,
        description,
        price,
        location,
        willDeliver,
      },
    };
    console.log("myNewPost", post);
    const newPost = await apiCall("posts", "POST", token, post);
    console.log("new post api call", newPost);
  };

  return (
    <div className="post">
      <form action="" className="newPostForm" onSubmit={(e) => handleSubmit(e)}>
        <p>Item:</p>
        <input
          required
          type="text"
          placeholder="required"
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Description:</p>
        <input
          required
          type="text"
          placeholder="required"
          onChange={(e) => setDescription(e.target.value)}
        />
        <p>Price:</p>
        <input
          required
          type="text"
          placeholder="required"
          onChange={(e) => setPrice(e.target.value)}
        />
        <p>Location:</p>
        <input type="text" onChange={(e) => setLocation(e.target.value)} />
        <p>Will Deliver?</p>
        <input type="checkbox" onChange={(e) => setWillDeliver(!willDeliver)} />
        <button type="submit">Post Item</button>
      </form>
    </div>
  );
};

export default NewPost;