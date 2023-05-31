import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Register = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { register, handleSubmit } = useForm();
  const [avatar, setAvatar] = useState(null);

  const onChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  function onSubmit(data) {
    const newData = {
      ...data,
      ...{
        image: avatar,
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
                <input
                  {...register("photo")}
                  type="file"
                  name="picture"
                  onChange={onChange}
                />
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
