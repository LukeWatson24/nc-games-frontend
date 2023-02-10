import { useState } from "react";
import styles from "../styles/login.module.scss";
import utils from "../styles/utils.module.scss";

function Login({ setDetails, activeTab, setActiveTab, waiting, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (username === "" || password === "") return;
    setDetails({ username, password });
    setUsername("");
    setPassword("");
  };

  if (waiting)
    return (
      <div className={activeTab === 0 ? styles.form : utils.hidden}>
        <p>Loading...</p>
      </div>
    );

  return (
    <form
      className={activeTab === 0 ? styles.form : utils.hidden}
      onSubmit={(e) => submitHandler(e)}
    >
      <p>{error}</p>
      <div className={styles.input_div}>
        <label htmlFor="si-username-input">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="si-username-input"
          type="text"
        />
      </div>
      <div className={styles.input_div}>
        <label htmlFor="si-password-input">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="si-password-input"
          type="password"
        />
      </div>
      <button disabled={username === "" || password === ""}>
        Login <span className="material-symbols-outlined">login</span>
      </button>

      <p>Or</p>

      <button
        onClick={(e) => {
          e.preventDefault();
          setActiveTab(1);
        }}
      >
        Sign Up <span className="material-symbols-outlined">edit_note</span>
      </button>
    </form>
  );
}

export default Login;
