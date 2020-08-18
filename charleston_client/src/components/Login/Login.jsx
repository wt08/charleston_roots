import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import Button from "react-bootstrap/Button";

const Login = ({ setUser, routerProps }) => {
  const [existingUserInput, setExistingUserInput] = useState({
    email: "",
    username: "",
  });

  const [newUserInput, setNewUserInput] = useState({ email: "", username: "" });
  const [isInvalidUser, setIsInvalidUser] = useState(false);
  const [isTakenUser, setIsTakenUser] = useState(false);

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
      .get(
        `https://srced-chs.herokuapp.com/users/username/${existingUserInput.username}`
      )
      .then((res) =>
        res.data
          ? // set "global" user variable from App
            setUser(res.data) & routerProps.history.push("/")
          : setIsInvalidUser(true)
      )
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
      url: `https://srced-chs.herokuapp.com/users`,
      method: "POST",
      data: newUserInput,
    })
      .then((res) =>
        // set "global" user variable from App
        res.data ? setUser(res.data) & routerProps.history.push("/") : null
      )
      // fix the isTakenUser alert error!
      .catch(console.error & setIsTakenUser(true));
  };

  return (
    <div className="loginComp">
      <br />
      <br />
      <br />
      <h3>Login</h3>
      <form onSubmit={handleSubmitExistingUser}>
        <input
          className="input"
          placeholder="Add your email"
          value={existingUserInput.email}
          name="email"
          onChange={handleChangeExistingUser}
          required
        />
        <input
          className="input"
          placeholder="Username"
          value={existingUserInput.username}
          name="username"
          onChange={handleChangeExistingUser}
          required
        />
        <Button type="submit">Login</Button>
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
          className="input"
          placeholder="Add your email"
          value={newUserInput.email}
          name="email"
          onChange={handleChangeNewUser}
          required
        />
        <input
          className="input"
          placeholder="Create a username"
          value={newUserInput.username}
          name="username"
          onChange={handleChangeNewUser}
          required
        />
        <Button type="submit">Create Account</Button>
        {isTakenUser ? <p>Username taken. Please try another.</p> : null}
      </form>
    </div>
  );
};

export default Login;
