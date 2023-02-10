import { useContext, useState } from "react";
import { TokenContext } from "../context/TokenContext";
import styles from "../styles/login.module.scss";
import Login from "./Login";
import SignUp from "./SignUp";

function LoginContainer() {
  const { setDetails, waiting, error } = useContext(TokenContext);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main>
      <section className={styles.wrapper}>
        <h1>{activeTab === 0 ? "Login" : "Sign Up"}</h1>
        <Login
          setDetails={setDetails}
          activeTab={activeTab}
          waiting={waiting}
          error={error}
          setActiveTab={setActiveTab}
        />
        <SignUp
          setDetails={setDetails}
          activeTab={activeTab}
          waiting={waiting}
          setActiveTab={setActiveTab}
        />
      </section>
    </main>
  );
}

export default LoginContainer;
