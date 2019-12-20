import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const handleSignup = (e, data) => {
    e.preventDefault();
    fetch("http://localhost:3001/core/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("token", json.token);
        setUsername(json.username);
        setLoggedIn(true);
      });
  };

  return (
    <form onSubmit={handleSignup}>
      <h4>Sign Up</h4>
      <label htmlFor="username">Username</label>
      <TextField
        id="username"
        label="Username"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Sign up
      </Button>
    </form>
  );
}

export default SignupForm;
