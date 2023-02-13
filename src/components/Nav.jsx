import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { TokenContext } from "../context/TokenContext";
import styles from "../styles/Nav.module.scss";
import utils from "../styles/utils.module.scss";

function Nav() {
  const { setToken, user, login } = useContext(TokenContext);
  const [active, setActive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    const setHeight = () => {
      const doc = window.document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    setHeight();
    window.addEventListener("resize", setHeight);

    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <nav className={styles.nav}>
      <div
        onClick={() => setMobileNav((prev) => !prev)}
        className={styles.burger}
      >
        <div
          className={
            mobileNav
              ? `${styles.burger_line} ${styles.active_top}`
              : styles.burger_line
          }
        ></div>
        <div
          className={
            mobileNav
              ? `${styles.burger_line} ${styles.active_middle}`
              : styles.burger_line
          }
        ></div>
        <div
          className={
            mobileNav
              ? `${styles.burger_line} ${styles.active_bottom}`
              : styles.burger_line
          }
        ></div>
      </div>
      <Link onClick={() => setMobileNav(false)} className={styles.logo} to="/">
        <img src={logo} alt="NC Games" />
      </Link>
      <div
        className={
          mobileNav
            ? styles.mobile_content
            : `${styles.mobile_content} ${styles.hidden}`
        }
      >
        <div className={styles.top}>
          <Link
            onClick={() => setMobileNav(false)}
            className={styles.nav_link}
            to="/reviews"
          >
            Reviews
          </Link>
          <Link
            onClick={() => setMobileNav(false)}
            className={styles.nav_link}
            to="/users"
          >
            Users
          </Link>
        </div>
        <div className={styles.bottom}>
          {user !== null ? (
            <div
              onClick={() => setActive((prev) => !prev)}
              className={styles.user}
            >
              <p>{user.username}</p>
              <img src={user.avatar_url} alt={user.username} />
              <span className="material-symbols-outlined">
                {!active ? "arrow_drop_up" : "arrow_drop_down"}
              </span>
              <div className={active ? styles.logout : utils.hidden}>
                <button
                  onClick={() => {
                    setToken(undefined);
                    setMobileNav(false);
                  }}
                >
                  Logout{" "}
                  <span className="material-symbols-outlined">logout</span>
                </button>
              </div>
            </div>
          ) : (
            <Link
              onClick={() => setMobileNav(false)}
              className={styles.nav_link}
              to="/login"
              disabled={login}
            >
              Login or Sign Up
            </Link>
          )}
        </div>
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
          <div
            onClick={() => setActive((prev) => !prev)}
            className={styles.user}
          >
            <p>{user.username}</p>
            <img src={user.avatar_url} alt={user.username} />
            <span className="material-symbols-outlined">
              {active ? "arrow_drop_up" : "arrow_drop_down"}
            </span>
            <div className={active ? styles.logout : utils.hidden}>
              <button onClick={() => setToken(undefined)}>
                Logout <span className="material-symbols-outlined">logout</span>
              </button>
            </div>
          </div>
        ) : (
          <Link className={styles.nav_link} to="/login" disabled={login}>
            Login or Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
