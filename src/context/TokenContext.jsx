import { createContext, useEffect, useState } from "react";
import { getLoggedInUser, loginUser } from "../utils/utils";

export const TokenContext = createContext(null);

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(undefined);
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(true); // temp
  useEffect(() => {
    if (token === undefined) {
      setUser(null);
    }

    if (login) {
      loginUser({ username: "jessjelly", password: "jessjelly" })
        .then((res) => {
          setToken(res);
          return getLoggedInUser(res);
        })
        .then((res) => {
          setUser(res);
          setLogin(false);
        });
    }
  }, [user, token, login]);

  return (
    <TokenContext.Provider value={{ token, user, login, setToken, setLogin }}>
      {children}
    </TokenContext.Provider>
  );
}
