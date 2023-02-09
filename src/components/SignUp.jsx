import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <label htmlFor="su-username-input">Username</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="su-username-input"
        type="text"
      />
      <label htmlFor="su-password-input">Password</label>
      <input id="su-password-input" type="password" />
      <label htmlFor="confirm-password-input">Confirm Password</label>
      <input id="confirm-password-input" type="password" />
      <button>Login</button>
    </form>
  );
}

export default SignUp;
