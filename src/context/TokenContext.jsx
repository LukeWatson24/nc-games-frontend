import { createContext, useEffect, useState } from "react";
import { getLoggedInUser, loginUser } from "../utils/utils";
import { useNavigate } from "react-router-dom";

export const TokenContext = createContext(null);

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(undefined);
  const [user, setUser] = useState(null);
  const [details, setDetails] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (token === undefined) {
      setUser(null);
      setDetails(null);
    }

    if (details !== null) {
      setWaiting(true);
      loginUser(details)
        .then((res) => {
          setError(null);
          setToken(res);
          return getLoggedInUser(res);
        })
        .then((res) => {
          setUser(res);
          setWaiting(false);
          navigate("/");
        })
        .catch(({ response }) => {
          setError(response.data.message);
          setWaiting(false);
        });
    }
  }, [user, token, details, navigate]);

  return (
    <TokenContext.Provider
      value={{ token, user, setToken, setDetails, waiting, error }}
    >
      {children}
    </TokenContext.Provider>
  );
}
