import { useState } from "react";
import { postUser } from "../utils/utils";
import styles from "../styles/login.module.scss";
import utils from "../styles/utils.module.scss";

function SignUp({ setDetails, activeTab, setActiveTab }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (username === "" || name === "" || password !== verifyPassword) return;
    setLoading(true);
    const url =
      img === ""
        ? "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        : img;
    postUser({ username, name, avatar_url: url, password }).then(() => {
      setLoading(false);
      setDetails({ username, password });
      setUsername("");
      setPassword("");
      setVerifyPassword("");
    });
  };

  if (loading)
    return (
      <div className={activeTab === 0 ? styles.form : utils.hidden}>
        <p>Loading...</p>
      </div>
    );

  return (
    <form
      className={activeTab === 1 ? styles.form : utils.hidden}
      onSubmit={(e) => submitHandler(e)}
    >
      <p>* required field</p>
      <div className={styles.input_div}>
        <label htmlFor="name-input">Name*</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name-input"
          type="text"
        />
      </div>
      <div className={styles.input_div}>
        <label htmlFor="su-username-input">Username*</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="su-username-input"
          type="text"
        />
      </div>
      <div className={styles.input_div}>
        <label htmlFor="img-input">Profile Picture</label>
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          id="img-input"
          type="url"
        />
      </div>
      <div className={styles.input_div}>
        <label htmlFor="su-password-input">Password*</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="su-password-input"
          type="password"
        />
      </div>
      <div className={styles.input_div}>
        <label htmlFor="confirm-password-input">Confirm Password*</label>
        <input
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
          id="confirm-password-input"
          type="password"
        />
      </div>
      <button
        disabled={username === "" || name === "" || password !== verifyPassword}
      >
        Sign Up <span className="material-symbols-outlined">edit_note</span>
      </button>

      <p>Already have an account?</p>

      <button
        onClick={(e) => {
          e.preventDefault();
          setActiveTab(0);
        }}
      >
        Login <span className="material-symbols-outlined">login</span>
      </button>
    </form>
  );
}

export default SignUp;
