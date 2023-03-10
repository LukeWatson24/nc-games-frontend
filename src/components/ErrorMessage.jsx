import { useEffect, useState } from "react";
import styles from "../styles/errors.module.scss";

function ErrorMessage({ code, action, setError }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (code === null) return;
    setShown(true);
    const timer = setTimeout(hide, 3000);
    function hide() {
      setError(null);
      setShown(false);
    }

    return () => clearTimeout(timer);
  }, [code, setError]);

  let message = "";

  if (code === 403 || code === 401) {
    message = `Please login to ${action}`;
  }
  return (
    <div className={shown ? styles.wrapper : styles.hidden}>
      <p>{`${message}`}</p>
      <button
        onClick={() => {
          setError(null);
          setShown(false);
        }}
      >
        CLOSE
      </button>
    </div>
  );
}

export default ErrorMessage;
