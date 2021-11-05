import React, { useState } from "react";
import Spinner from "../components/layout/Spinner";
import { setUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Debe colocar Usuario y Contraseña");
    } else {
      setError(false);
      setLoading(true);

      //Simulación Login
      setTimeout(() => {
        setLoading(false);
        dispatch(
          setUser({
            id: 1,
            username: username,
            firstname: "Nombre",
            lastname: "Apellido",
            expiresAt: "2021-12-31",
          })
        );
        console.log(username, password);
        //navigate("/invoices");
      }, 3000);
    }
  };

  return (
    <div className="container">
      {/* Outer Row */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="username"
                          name="username"
                          value={username}
                          placeholder="Enter Username"
                          onChange={handleUsernameChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="password"
                          name="password"
                          value={password}
                          placeholder="Password"
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                        onClick={handleLoginSubmit}
                        disabled={loading}
                      >
                        Login
                      </button>
                      {loading && <Spinner />}
                      {error && (
                        <div class="card text-danger text-center m-2 py-1">
                          {error}
                        </div>
                      )}
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
