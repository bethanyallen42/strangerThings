import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiCall } from "../api";
import { Form } from "./index";

const CreateOrEditPost = ({
  token,
  setUser,
  setPosts,
  makeNewPost,
  setMakeNewPost,
  featuredPost,
  isFeatured,
  setIsFeatured,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("On Request");
  const [willDeliver, setWillDeliver] = useState(false);
  console.log("in create or edit", featuredPost);

  const history = useHistory();

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
    console.log("in submit but before if", token);
    if (makeNewPost) {
      console.log("in handleSubmit", token);
      await apiCall("posts", "POST", token, post);
    } else {
      console.log("in handleSubmit", token);
      const response = await apiCall(
        `posts/${featuredPost._id}`,
        "PATCH",
        token,
        post
      );
      console.log("in handleSubmit", token);
      console.log("i'm editing a post", response);
    }

    (async () => {
      const postInfo = await apiCall("posts", "GET", token);
      setPosts(postInfo.data.posts);
    })();

    (async () => {
      const userInfo = await apiCall("users/me", "GET", token);
      localStorage.setItem("user", JSON.stringify(userInfo));
      setUser(userInfo?.data);
    })();

    if (makeNewPost) {
      setMakeNewPost(false);
    }

    if (!makeNewPost) {
      setIsFeatured(!isFeatured);
      history.goBack();
    }
    alert("Post submitted");
  };

  return (
    <div className={makeNewPost ? "post" : "edit"}>
      <h3>{makeNewPost ? "POST A NEW ITEM FOR SALE" : "EDIT YOUR POST"}</h3>
      <Form
        setTitle={setTitle}
        setDescription={setDescription}
        setPrice={setPrice}
        setLocation={setLocation}
        willDeliver={willDeliver}
        setWillDeliver={setWillDeliver}
        featuredPost={featuredPost}
        makeNewPost={makeNewPost}
        setMakeNewPost={setMakeNewPost}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateOrEditPost;
