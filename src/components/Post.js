import React, { useEffect, useState } from "react";
import { AuthorConsole } from "./index";
import { apiCall } from "../api";
import { useHistory } from "react-router-dom";

const Post = ({
  post,
  featuredPost,
  setFeaturedPost,
  token,
  isFeatured,
  setIsFeatured,
  isAuthor,
  posts,
  setPosts,
  user,
  setUser,
}) => {
  const history = useHistory();
  const [message, setMessage] = useState("");

  const handleClick = (post) => {
    console.log("is there a post?", post);
    setFeaturedPost(post);
    setIsFeatured(!isFeatured);
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
    setMessage("");
    setIsFeatured(!isFeatured);
    alert("Your message has been sent");
    history.goBack();
  };

  const handleDelete = async (e) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const isDeleted = await apiCall(`posts/${post._id}`, "DELETE", token);
      if (isDeleted) {
        const remainingPosts = posts.filter(
          (currentPost) => currentPost._id !== post._id
        );
        setPosts(remainingPosts);

        (async () => {
          const userInfo = await apiCall("users/me", "GET", token);
          localStorage.setItem("user", JSON.stringify(userInfo));
          setUser(userInfo.data);
        })();
        setIsFeatured(!isFeatured);
        alert("This post has been deleted");
        history.goBack();
      }
    }
  };

  const handleClose = async () => {
    setMessage("");
    setIsFeatured(!isFeatured);

    history.goBack();
  };

  return (
    <div className="post" key={post._id}>
      <div className="postHeader">
        <h2>{post.title && post.title}</h2>
        <p>{post.price && post.price}</p>
      </div>
      <p className="postDescription">{post.description && post.description}</p>
      <div className="postFooter">
        <p>Location: {post.location ? post.location : "On Request"}</p>

        <p>
          Author:{" "}
          {post?.author?.username
            ? post.author.username
            : user?.username
            ? user.username
            : null}
        </p>
        <p>{post.willDeliver ? "Will Deliver" : "Must Pickup"}</p>
      </div>
      {isFeatured && (
        <div className="featuredFooter">
          {!token && isFeatured && (
            <div className="buttonWrapper">
              <p>Please login to send a message</p>
            </div>
          )}

          {token && isAuthor && isFeatured && (
            <AuthorConsole
              post={post}
              token={token}
              handleClose={handleClose}
              handleDelete={handleDelete}
              featuredPost={featuredPost}
              setPosts={setPosts}
              setUser={setUser}
              isFeatured={isFeatured}
              setIsFeatured={setIsFeatured}
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
              </div>
            </>
          )}
        </div>
      )}
      <button
        onClick={(e) => {
          isFeatured ? handleClose() : handleClick(post);
        }}
      >
        {isFeatured ? "Close" : "See post"}
      </button>
    </div>
  );
};

export default Post;
