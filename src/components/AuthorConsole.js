import React, { useState } from "react";

const AuthorConsole = ({ featuredPost, handleClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {};
  return (
    <>
      <div className="console">
        <h2>Messages</h2>
        <p>
          {featuredPost.messages.length > 0
            ? "Scroll to see more messages"
            : "You do not have any messages"}
        </p>
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
      </div>
      {/* {isEditing && } */}
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
            handleEdit();
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

export default AuthorConsole;
