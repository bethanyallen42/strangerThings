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
  const [required, setRequired] = useState();

  useEffect(() => {
    if (featuredPost) {
      setTitle(featuredPost.title);
      setDescription(featuredPost.Description);
      setPrice(featuredPost.Price);
      setLocation(featuredPost.location);
      setWillDeliver(featuredPost.willDeliver);
      setRequired(false);
    }

    if (makeNewPost) {
      setRequired(true);
    }
  }, []);

  return (
    <form action="" className="newPostForm" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <p>Item:</p>
        <input
          required={required}
          type="text"
          placeholder={required ? "required" : featuredPost?.title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <p>Description:</p>
        <input
          required={required}
          type="text"
          placeholder={required ? "required" : featuredPost?.description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <p>Price:</p>
        <input
          required={required}
          type="text"
          placeholder={required ? "required" : featuredPost?.price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <p>Location:</p>
        <input
          type="text"
          placeholder={featuredPost?.location && featuredPost.location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <p>Will Deliver?</p>
        <input
          type="checkbox"
          checked={willDeliver}
          onChange={(e) => setWillDeliver(!willDeliver)}
        />
      </div>
      <button type="submit">
        {makeNewPost ? "Post Item" : "Submit Changes"}
      </button>
    </form>
  );
};

export default Form;
