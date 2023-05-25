import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const loginUser = (values) => {
    auth.signin(values, () => {
      navigate("/");
    });
  };

  return (
    <div className="auth-container">
      <div className="wrapper">
        <div className="auth-form-box">
          <form
            className="login-form"
            onSubmit={handleSubmit((data) => loginUser(data))}
          >
            <h2>Log In</h2>
            <div className="auth-input-group">
              <div className="auth-input-field">
                <i className="fa-regular fa-envelope"></i>
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  {...register("email")}
                />
              </div>
              <div className="auth-input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password")}
                />
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
