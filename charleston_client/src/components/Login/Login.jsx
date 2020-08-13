import React, {useState} from "react";
import axios from 'axios'

const Login = () => {
    const [input, setInput] = useState({ email: "", username: "" });

    const handleChange = (event) => {
        setInput({
          ...input,
          [event.target.name]: event.target.value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        axios({
          url: `${apiUrl}/dogs`,
          method: "POST",
          data: input,
        })
          .then((res) => {
            setDog({ createdDog: res.data });
            props.history.push("/dogs");
          })
          .catch(console.error);
      };


  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
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
      </form>


      <h4>Don't have an account? Create one so you can save your favorite recipes!</h4>
      <br />
      <br />
      <h3>Create Account</h3>
      <form onSubmit={handleSubmit}>
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
