import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { TokenContext } from "../context/TokenContext";
import styles from "../styles/Nav.module.scss";

function Nav() {
  const { setToken, user, login } = useContext(TokenContext);
  return (
    <nav className={styles.nav}>
      <div className={styles.burger}>
        <span className={styles.burger_line}></span>
        <span className={styles.burger_line}></span>
        <span className={styles.burger_line}></span>
      </div>
      <div className={styles.left}>
        <Link className={styles.nav_link} to="/">
          <img src={logo} alt="NC Games" />
        </Link>
        <Link className={styles.nav_link} to="/reviews">
          Reviews
        </Link>
        <Link className={styles.nav_link} to="/users">
          Users
        </Link>
      </div>
      <div className={styles.right}>
        {user !== null ? (
          <button onClick={() => setToken(undefined)}>TEMP LOGOUT</button>
        ) : (
          <Link to="/login" disabled={login}>
            Login or Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
