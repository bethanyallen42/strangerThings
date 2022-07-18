import React, { useEffect, useState } from "react";
import { AuthorConsole } from "./index";
import { apiCall } from "../api";
import { useHistory } from "react-router-dom";

const Post = ({
  post,
  setPost,
  featuredPost,
  setFeaturedPost,
  token,
  isFeatured,
  setIsFeatured,
  isAuthor,
  posts,
  setPosts,
  setUser,
}) => {
  const history = useHistory();
  const [message, setMessage] = useState("");

  const handleClick = (post) => {
    setFeaturedPost(post);
    if (window.location.pathname.includes("account")) {
      history.push(`/account/${post._id}`);
    } else {
      history.push(`/posts/${post._id}`);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const newMessage = { message: { content: message } };
    const response = await apiCall(
      `posts/${post._id}/messages`,
      "POST",
      token,
      newMessage
    );
    alert("Your message has been sent");
  };

  const handleDelete = async (e) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const isDeleted = await apiCall(`posts/${post._id}`, "DELETE", token);
      if (isDeleted) {
        const remainingPosts = posts.filter(
          (currentPost) => currentPost._id !== post._id
        );
        console.log("remaining posts!!!!!!!!!!", remainingPosts);
        setPosts(remainingPosts);

        (async () => {
          const userInfo = await apiCall("users/me", "GET", token);
          localStorage.setItem("user", JSON.stringify(userInfo));
          setUser(userInfo.data);
        })();

        alert("This post has been deleted");
      }
    }
  };

  //my close seems to take a few clicks to work after sending a message or deleting a post...
  const handleClose = () => {
    setFeaturedPost({});
    setIsFeatured(false);
    console.log("featured in close", featuredPost);
    setMessage("");

    history.goBack();
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
      <div className="featuredFooter">
        {!token && isFeatured && (
          <div className="buttonWrapper">
            <p>Please login to send a message</p>
            {/* <button
              onClick={() => {
                console.log("this is stupid");
                history.push("/account");
              }}
            >
              Login/Register
            </button> */}
            {/*make a close button component?*/}
            <button
              onClick={(e) => {
                handleClose();
              }}
            >
              Close
            </button>
          </div>
        )}

        {token && isAuthor && isFeatured && (
          <AuthorConsole
            post={post}
            handleClose={handleClose}
            handleDelete={handleDelete}
          />
        )}
        {token && !isAuthor && isFeatured && (
          <>
            <p>Send a message about this item:</p>
            <textarea
              type="text"
              placeholder="Type message here..."
              className="messageInput"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <div className="buttonWrapper">
              <button
                onClick={(e) => {
                  sendMessage(e);
                }}
              >
                Send Message
              </button>

              <button
                onClick={(e) => {
                  handleClose();
                }}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
