import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const AccountSettings = ({ user, setUser }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClickDeleteUser = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3000/users/${user.id}`,
      method: "DELETE",
    })
      // set "global" user from app to null
      .then(setUser(null) & setIsDeleted(true))
      .catch(console.error);
  };

  return (
    <div>
      <h3>Username:</h3>
      <h3>Email:</h3>
      <button>Logout</button>
      <button onClick={handleClickDeleteUser}>Delete</button>
      {isDeleted ? <Redirect to="/" /> : null}
    </div>
  );
};

export default AccountSettings;
