import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ email: "", username: "" });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitNewUser = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3000/users`,
      method: "POST",
      data: input,
    })
      .then(<Redirect to='/' />)
      .catch(console.error);
  };

  return (
    <div>
      {/* <h3>Login</h3>
      <form onSubmit="">
        <input
          placeholder="Email"
          value={input.email}
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="Username"
          value={input.username}
          name="username"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form> */}

      <br />
      <br />
      <h4>
        Don't have an account? Create one so you can save your favorite recipes!
      </h4>
      <h3>Create Account</h3>
      <form onSubmit={handleSubmitNewUser}>
        <input
          placeholder="Add your email"
          value={input.email}
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="Create a username"
          value={input.username}
          name="username"
          onChange={handleChange}
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Login;
