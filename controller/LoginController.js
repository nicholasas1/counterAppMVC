import LoginModel from "../models/LoginModel";
import { useState } from "react";

const LoginController = (props) => {
  const [model] = useState(new LoginModel());
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (username, password) => {
    model.setCredentials(username, password);
    const isSuccess = model.login();
    if (isSuccess) {
      props.onLoginSuccess();
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return { handleLogin, errorMessage };
};

export default LoginController;