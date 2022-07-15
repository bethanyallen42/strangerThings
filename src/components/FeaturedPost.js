import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FeaturedPost = ({
  featuredPost,
  setFeaturedPost,
  displayPost,
  token,
}) => {
  console.log("this is my featured Post", featuredPost);
  const history = useHistory();
  const [message, setMessage] = useState("");
  console.log(message);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Send my message");
  };

  return (
    <div className="wrapper">
      <div className="post">
        {displayPost(featuredPost)}
        <div className="featuredFooter">
          {/*if token display below else display something about needing to login and a button to the account */}
          {token ? (
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
                    setFeaturedPost({});
                    setMessage("");
                    history.push("/posts");
                  }}
                >
                  Close
                </button>
                {/*shows something different if it is your post? "This is your post." show messages and a delete button */}
              </div>
            </>
          ) : (
            <div className="buttonWrapper">
              <p>Please login to send a message</p>
              <button onClick={() => history.push("/account")}>
                Login/Register{" "}
              </button>
              <button
                onClick={(e) => {
                  setFeaturedPost({});
                  setMessage("");
                  history.push("/posts");
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
