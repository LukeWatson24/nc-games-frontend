import { createContext, useEffect, useState } from "react";
import { loginUser } from "../utils/utils";

export const TokenContext = createContext(null);

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(undefined);
  useEffect(() => {
    loginUser({ username: "jessjelly", password: "jessjelly" }).then((res) =>
      setToken(res)
    );
  }, []);

  return (
    <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
  );
}
