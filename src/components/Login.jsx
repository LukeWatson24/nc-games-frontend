import { useState } from "react";

function Login({ setDetails }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setDetails({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="si-username-input">Username</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="si-username-input"
        type="text"
      />
      <label htmlFor="si-password-input">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="si-password-input"
        type="password"
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
