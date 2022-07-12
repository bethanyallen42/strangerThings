import React from "react";

const UserProfile = ({ user, setToken, setUser }) => {
  return (
    <>
      <h1>UserProfile</h1>
      <p>Username: {user.username}</p>
      <p>Messages: {/*Add a way to display messages and posts? */}</p>
      <p>Current Posts: </p>
      <button
        onClick={() => {
          setToken("");
          setUser(false);
        }}
      >
        Logout
      </button>
    </>
  );
};

export default UserProfile;
