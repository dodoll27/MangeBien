import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";

export const Register = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const newData = {
      ...data,
      ...{
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      },
    };
    auth.register(newData, () => {
      navigate("/login");
    });
  }

  return (
    <div className="auth-container">
      <div className="wrapper">
        <div className="auth-form-box">
          <form
            className="signin-form"
            onSubmit={handleSubmit((d) => onSubmit(d))}
          >
            <h2>Sign Up</h2>
            <div className="auth-input-group">
              <div className="sign-up-photo">
                <input {...register("photo")} type="file" name="picture" />
              </div>
              <div className="auth-input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  {...register("name")}
                />
              </div>
              <select className="auth-input-field">
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten Free</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="Keto">Keto</option>
                <option value="intermittent-fasting">
                  Intermittent fasting
                </option>
                <option value="pescarian">Pescarian</option>
              </select>
              <div className="auth-input-field">
                <i className="fa-regular fa-envelope"></i>
                <input
                  type="text"
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
              <div className="auth-input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password"
                />
              </div>
            </div>
            <div className="auth-input-field">
              <button className="signup-button" type="submit">
                Sign Up
              </button>
            </div>{" "}
            <a className="login-link" href="/login">
              Log In
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
