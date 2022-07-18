import React, { useState } from "react";
import { CreateOrEditPost } from "./index";

const AuthorConsole = ({
  post,
  handleClose,
  handleDelete,
  featuredPost,
  setPosts,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  console.log("declared", isEditing);
  return (
    <>
      <div className="console">
        {isEditing ? (
          <div>
            <CreateOrEditPost featuredPost={featuredPost} setPosts={setPosts} />
          </div>
        ) : (
          <>
            <h2>Messages</h2>
            <p>
              {post.messages.length > 0
                ? "Scroll to see more messages"
                : "You do not have any messages"}
            </p>
            <div className="messageDisplay">
              {post.messages.map((message) => {
                return (
                  <div key={message._id} className="message">
                    <p>{message.content}</p>
                    <p>From: {message.fromUser.username}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
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
            console.log("first", isEditing);
            setIsEditing(!isEditing);
            console.log("second", isEditing);
          }}
        >
          {isEditing ? "See Messages" : "Edit Post"}
        </button>
      </div>
    </>
  );
};

export default AuthorConsole;
