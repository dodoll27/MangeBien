import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export const LoginPage = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  return (
    <div className="auth-container">
      <div className="wrapper">
        <div className="auth-form-box">
          <form className="login-form">
            <h2>Log In</h2>
            <div className="auth-input-group">
              <div className="auth-input-field">
                <i className="fa-regular fa-envelope"></i>
                <input type="text" placeholder="E-mail" name="email" />
              </div>
              <div className="auth-input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" name="password" />
              </div>
            </div>
            <div className="auth-input-field">
              <button className="login-button" type="submit">
                Log In
              </button>
            </div>
            <a className="register-link" href="/register">
              Register
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
