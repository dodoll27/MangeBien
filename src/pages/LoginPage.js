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

  function onSubmit(data) {
    auth.signin(data.username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="auth-container">
      <div
        className="auth-background"
        style={{ backgroundImage: "url(/images/thumbnail.jpeg)" }}
      ></div>
      <div className="wrapper">
        <div className="auth-form-box">
          <h1>Log In</h1>
          <form>
            <div className="auth-input-group">
              <div className="auth-input-field">
                <i className="fa-regular fa-envelope"></i>
                <input type="text" placeholder="E-mail" name="email" />
              </div>
              <div className="auth-input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" name="password" />
              </div>
              <div className="auth-input-field">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
