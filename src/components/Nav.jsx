import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styles from "../styles/Nav.module.scss";

function Nav() {
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
      <div className={styles.right}>USER INFO</div>
    </nav>
  );
}

export default Nav;
