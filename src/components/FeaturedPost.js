import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiCall } from "../api";

const FeaturedPost = ({
  featuredPost,
  setFeaturedPost,
  displayPost,
  token,
  user,
  posts,
  setPosts,
}) => {
  const history = useHistory();
  const [message, setMessage] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);

  useEffect(() => {
    if (featuredPost.author._id === user._id) {
      setIsAuthor(true);
    }
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const newMessage = { message: { content: message } };
    const response = await apiCall(
      `posts/${featuredPost._id}/messages`,
      "POST",
      token,
      newMessage
    );
    alert("Your message has been sent");
  };

  const handleDelete = async (e) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const isDeleted = await apiCall(
        `posts/${featuredPost._id}`,
        "DELETE",
        token
      );
      if (isDeleted) {
        const remainingPosts = posts.filter(
          (post) => post._id !== featuredPost._id
        );
        setPosts(remainingPosts);
        alert("This post has been deleted");
      }
    }
  };

  const handleClose = () => {
    setFeaturedPost({});
    setMessage("");
    setIsAuthor(false);
    history.push("/posts");
  };

  return (
    <div className="wrapper">
      <div className="post">
        {displayPost(featuredPost)}
        <div className="featuredFooter">
          {!token && (
            <div className="buttonWrapper">
              <p>Please login to send a message</p>
              <button onClick={() => history.push("/account")}>
                Login/Register{" "}
              </button>
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
          {token && isAuthor && (
            <div className="buttonWrapper">
              <button
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete Post
              </button>

              <button
                onClick={(e) => {
                  console.log("edit");
                }}
              >
                Edit Post
              </button>

              <button
                onClick={(e) => {
                  handleClose();
                }}
              >
                Close
              </button>
            </div>
          )}
          {token && !isAuthor && (
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
    </div>
  );
};

export default FeaturedPost;
