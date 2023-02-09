import { createContext, useEffect, useState } from "react";
import { getLoggedInUser, loginUser } from "../utils/utils";

export const TokenContext = createContext(null);

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(undefined);
  const [user, setUser] = useState(null);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    if (token === undefined) {
      setUser(null);
      setDetails(null);
    }

    if (details !== null) {
      loginUser(details)
        .then((res) => {
          setToken(res);
          return getLoggedInUser(res);
        })
        .then((res) => {
          setUser(res);
        });
    }
  }, [user, token, details]);

  return (
    <TokenContext.Provider value={{ token, user, setToken, setDetails }}>
      {children}
    </TokenContext.Provider>
  );
}
