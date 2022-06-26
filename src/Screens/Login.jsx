import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.svg";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("user") != null) {
      navigate("/dashboard");
    }
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`https://dsmeglobal-api.herokuapp.com/api/v1/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.message) {
          setError(res.data.message);
          window.localStorage.clear("user");
        } else {
          window.localStorage.setItem("user", res.data.email);
          setError("");
          navigate("/dashboard");
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="login__container">
      <div className="login__container__content">
        <img src={logo} alt="logo" />
        <div className="login__container__content__form">
          <div className="login__container__content__form__input">
            <input
              type="eamil"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoFocus
              required
            />
          </div>
          <div className="login__container__content__form__input">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="login__container__content__form__checkbox">
            <input
              className="styled-checkbox"
              id="styled-checkbox"
              type="checkbox"
              name="Remember"
              value={remember}
              onChange={(e) => setRemember(e.target.value)}
            />
            <label
              style={{ color: "#1c0a15", fontSize: 13 }}
              htmlFor="styled-checkbox"
            >
              Remember Me
            </label>
          </div>
          <button type="submit" className="secondary__button">
            Login
          </button>
          {error !== "" ? (
            <div
              style={{ color: "red", textAlign: "center", marginTop: ".5em" }}
            >
              {error}
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}
