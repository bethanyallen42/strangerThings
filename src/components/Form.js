import React, { useState } from "react";

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
  return (
    <form action="" className="newPostForm" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <p>Item:</p>
        <input
          required
          type="text"
          placeholder={"required"}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <p>Description:</p>
        <input
          required
          type="text"
          placeholder={"required"}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <p>Price:</p>
        <input
          required
          type="text"
          placeholder="required"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <p>Location:</p>
        <input type="text" onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div>
        <p>Will Deliver?</p>
        {/* How do i make this be checked based off the featured post */}
        <input type="checkbox" onChange={(e) => setWillDeliver(!willDeliver)} />
      </div>
      <button type="submit">Post Item</button>
    </form>
  );
};

export default Form;
