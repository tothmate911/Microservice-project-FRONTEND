import React, { useState } from "react";
import "../Login.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Auth = (props) => {
  let { operation, url } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("userid", response.data.userid);
        history.push("/");
        window.location.reload();
      });
  };

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
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-label-group">
                  <input
                    type="username"
                    id="inputUsername"
                    className="form-control"
                    placeholder="Username address"
                    required
                    autoFocus
                    onChange={(event) => setUsername(event.target.value)}
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
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
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
