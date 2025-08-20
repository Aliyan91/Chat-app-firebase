import React from "react";
import "./login.css";
import assets from "../../assets/assets.js";
export default function Login() {
  const [currState, setCurrState] = React.useState("Sign Up");
  return (
    <div className="login">
      <img src={assets.logo_big} className="logo" alt=""></img>
      <form className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        ) : null}

        <input
          type="email"
          placeholder="Email"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit">
          {currState == "Sign Up" ? "Create Account" : "Login Now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forget">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Click here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create Account{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
