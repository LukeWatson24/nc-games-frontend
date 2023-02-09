import { useContext } from "react";
import { TokenContext } from "../context/TokenContext";
import Login from "./Login";
import SignUp from "./SignUp";

function LoginContainer() {
  const { setDetails } = useContext(TokenContext);
  return (
    <main>
      <Login setDetails={setDetails} />
      <SignUp />
    </main>
  );
}

export default LoginContainer;
