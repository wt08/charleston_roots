import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = ({ setUser }) => {
  const [existingUserInput, setExistingUserInput] = useState({
    email: "",
    username: "",
  });

  const [newUserInput, setNewUserInput] = useState({ email: "", username: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInvalidUser, setIsInvalidUser] = useState(false);
  const [isTakenUser, setIsTakenUser] = useState(false);

  if (isLoggedIn && existingUserInput.email) {
    setUser(existingUserInput);
  } else if (isLoggedIn && newUserInput.email) {
    setUser(newUserInput);
  }

  const handleChangeExistingUser = (event) => {
    setExistingUserInput({
      ...existingUserInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitExistingUser = (event) => {
    // normally onSubmit renders new page. Since React is single page app, need to prevent this default.
    event.preventDefault();
    axios
      .get(`http://localhost:3000/users/username/${existingUserInput.username}`)
      .then((res) => (res.data ? setIsLoggedIn(true) : setIsInvalidUser(true)))
      .catch(console.error);
  };

  const handleChangeNewUser = (event) => {
    setNewUserInput({
      ...newUserInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitNewUser = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3000/users`,
      method: "POST",
      data: newUserInput,
    })
      .then((res) => (res.data ? setIsLoggedIn(true) : null))
      .catch(console.error & setIsTakenUser(true));
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmitExistingUser}>
        <input
          placeholder="Add your email"
          value={existingUserInput.email}
          name="email"
          onChange={handleChangeExistingUser}
        />
        <input
          placeholder="Username"
          value={existingUserInput.username}
          name="username"
          onChange={handleChangeExistingUser}
        />
        <button type="submit">Login</button>
        {isInvalidUser ? <p>Invalid username</p> : null}
      </form>

      <br />
      <br />
      <h4>
        Don't have an account? Create one so you can save your favorite recipes!
      </h4>
      <h3>Create Account</h3>
      <form onSubmit={handleSubmitNewUser}>
        <input
          placeholder="Add your email"
          value={newUserInput.email}
          name="email"
          onChange={handleChangeNewUser}
        />
        <input
          placeholder="Create a username"
          value={newUserInput.username}
          name="username"
          onChange={handleChangeNewUser}
        />
        <button type="submit">Create Account</button>
        {isTakenUser ? <p>Username taken. Please try another.</p> : null}
      </form>
      {isLoggedIn ? <Redirect to="/" /> : null}
    </div>
  );
};

export default Login;
