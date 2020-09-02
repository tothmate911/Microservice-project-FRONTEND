import React from "react";
import "../Login.css";
import { Link } from "react-router-dom";

const Auth = (props) => {
  let { operation } = props;
  let operationClass = operation === "Sign In" ? "signin" : "signup";
  const RegistrationButton = (
    <Link to="/registration">
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase mt-2 bg-white text-secondary"
        type="button"
      >
        Sign Up
      </button>
    </Link>
  );

  const registration = operation === "Sign In" ? RegistrationButton : "";

  const content = (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">{operation}</h5>
              <form className={`form-signin ${operationClass}`}>
                <div className="form-label-group">
                  <input
                    type="username"
                    id="inputUsername"
                    className="form-control"
                    placeholder="Username address"
                    required
                    autoFocus
                  />
                  <label htmlFor="inputUsername">Username</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember password
                  </label>
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  {operation}
                </button>
                {registration}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return content;
};

export default Auth;
