import React, { useState } from "react";
import { apiCall } from "../api";
import { Form } from "./index";

const CreateOrEditPost = ({
  token,
  setUser,
  setPosts,
  makeNewPost,
  setMakeNewPost,
  featuredPost,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("On Request");
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let post = {
      post: {
        title,
        description,
        price,
        location,
        willDeliver,
      },
    };
    if (makeNewPost) {
      await apiCall("posts", "POST", token, post);
    } else {
      console.log("i'm editing a post");
    }

    (async () => {
      const postInfo = await apiCall("posts", "GET", token);
      setPosts(postInfo.data.posts);
    })();

    (async () => {
      const userInfo = await apiCall("users/me", "GET", token);
      localStorage.setItem("user", JSON.stringify(userInfo));
      setUser(userInfo.data);
    })();

    setMakeNewPost(false);
    alert("Post submitted");
  };

  return (
    <div className="post">
      <h3>POST A NEW ITEM FOR SALE</h3>
      <Form
        setTitle={setTitle}
        setDescription={setDescription}
        setPrice={setPrice}
        setLocation={setLocation}
        willDeliver={willDeliver}
        setWillDeliver={setWillDeliver}
        handleSubmit={handleSubmit}
        featuredPost={featuredPost}
        makeNewPost={makeNewPost}
        setMakeNewPost={setMakeNewPost}
      />
    </div>
  );
};

export default CreateOrEditPost;
