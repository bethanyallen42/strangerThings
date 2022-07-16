import React from "react";

const UserProfile = ({ user, setToken, setUser }) => {
  console.log(user.username);
  return (
    <>
      <h1>{user.username}'s Profile</h1>
      <p>Messages: {/*Add a way to display messages and posts? */}</p>
      <p>Current Posts: </p>
      <button
        onClick={() => {
          setToken("");
          setUser(false);
          localStorage.clear();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default UserProfile;
