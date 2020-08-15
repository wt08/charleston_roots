import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const AccountSettings = ({ user, setUser }) => {
  // variable to reflect status of need to redirect
  const [isRedirect, setIsRedirect] = useState(false);

  const handleClickDeleteUser = (event) => {
    event.preventDefault();
    axios({
      url: `https://srced-chs.herokuapp.com/users/${user.id}`,
      method: "DELETE",
    })
      // set "global" user from app to null
      .then(setUser(null) & setIsRedirect(true))
      .catch(console.error);
  };

  const handleClickLogout = () => {
    setUser(null);
    setIsRedirect(true);
  };

  return (
    <div>
      {/* conditionals make sure this doesn't error out when no user logged in */}
      {user ? <h3>Username: {user.username}</h3> : null}
      {user ? <h3>Email: {user.email}</h3> : null}
      <button onClick={handleClickLogout}>Logout</button>
      <button onClick={handleClickDeleteUser}>Delete</button>
      {isRedirect ? <Redirect to="/" /> : null}
    </div>
  );
};

export default AccountSettings;
