import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  let { prevent } = props;

  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  const showP = () => {
    const passwordInput = document.getElementById("password");
    passwordInput.type = document.getElementById("cb").checked ? "text" : "password";
  };

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUsers(data);
    alert("logged in successfully");
  };

  const getUsers = async () => {
    const response = await fetch("http://localhost:3080/", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="login-wrapper df bg-light p-5">
      <form onSubmit={handleSubmit} className="log shadow p-4 rounded">
        <div id="container" className="text-center">
          <h1 id="h" className="login-heading mb-4">Log In</h1>
          <input
            id="mail"
            onChange={handleForm}
            name="mail"
            type="email"
            className="form-control mb-3"
            placeholder="Email Address"
          />
          <input
            id="password"
            onChange={handleForm}
            name="password"
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />
          <div id="checkbox" className="form-check mb-3">
            <input onClick={showP} id="cb" type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="cb">Show password</label>
          </div>
          <button style={{color:"aqua"}} id="bn" className="btn btn-primary w-100 login-btn">Log in</button>
          <a className="fp forgot-password d-block mb-3" href="#">
            Forgot password?
          </a>
          <div>
            <p className="Ac no-account mb-4">Don't have an account?</p>
          </div>
          <Link  className="fp btn btn-outline-primary signup-btn" to="/signup">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;