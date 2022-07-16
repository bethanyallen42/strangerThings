import React from "react";

const AuthorFooter = ({ featuredPost, handleClose }) => {
  console.log(featuredPost.messages);
  return (
    <>
      <div className="console">
        <h2>Messages</h2>
        <div className="messageDisplay">
          {featuredPost.messages.map((message) => {
            return (
              <div key={message._id} className="message">
                <p>{message.content}</p>
                <p>From: {message.fromUser.username}</p>
              </div>
            );
          })}
        </div>
        <p>scroll to see more messages</p>
      </div>
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
    </>
  );
};

export default AuthorFooter;
