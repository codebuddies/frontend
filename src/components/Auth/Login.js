import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const handleLogin = (e, data) => {
    console.log(e);
    e.preventDefault();
    fetch("http://localhost:3001/token-auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("token", json.token);
        setLoggedIn(true);
        setUsername(json.user.username);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <h4>Log In</h4>
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
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
