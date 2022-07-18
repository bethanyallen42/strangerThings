import React, { useEffect, useState } from "react";

const Form = ({
  setTitle,
  setDescription,
  setPrice,
  setLocation,
  willDeliver,
  setWillDeliver,
  handleSubmit,
  featuredPost,
  makeNewPost,
  setMakeNewPost,
}) => {
  console.log("featured in form", featuredPost);
  useEffect(() => {
    if (featuredPost) {
      setTitle(featuredPost.title);
      setDescription(featuredPost.Description);
      setPrice(featuredPost.Price);
      setLocation(featuredPost.location);
      setWillDeliver(featuredPost.willDeliver);
    }
  }, []);
  return (
    <form action="" className="newPostForm" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <p>Item:</p>
        <input
          required
          type="text"
          placeholder={featuredPost?.title ? featuredPost.title : "required"}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <p>Description:</p>
        <input
          required
          type="text"
          placeholder={"required"}
          // value={featuredPost?.description && featuredPost.description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <p>Price:</p>
        <input
          required
          type="text"
          placeholder="required"
          // value={featuredPost?.price && featuredPost.price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <p>Location:</p>
        <input
          type="text"
          // value={featuredPost?.location && featuredPost.location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <p>Will Deliver?</p>
        {/* How do i make this be checked based off the featured post */}
        <input type="checkbox" onChange={(e) => setWillDeliver(!willDeliver)} />
      </div>
      <button type="submit">
        {makeNewPost ? "Post Item" : "Submit Changes"}
      </button>
    </form>
  );
};

export default Form;
