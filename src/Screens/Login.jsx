import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="224.105"
          height="83.061"
          viewBox="0 0 224.105 83.061"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#62cbac" />
              <stop offset="1" stopColor="#316656" />
            </linearGradient>
            <clipPath id="clipPath">
              <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="80.978"
                height="83.061"
                fill="url(#linear-gradient)"
              />
            </clipPath>
          </defs>
          <g
            id="Group_4"
            data-name="Group 4"
            transform="translate(-196.895 -26)"
          >
            <g
              id="Group_2"
              data-name="Group 2"
              transform="translate(196.895 26)"
            >
              <g id="Group_3" data-name="Group 3" clipPath="url(#clipPath)">
                <path
                  id="Path_37"
                  data-name="Path 37"
                  d="M0,42.707V40.264c.012-.107.032-.213.036-.32a41.951,41.951,0,0,1,.693-6.282A41.644,41.644,0,0,1,19.1,6.259,39.569,39.569,0,0,1,38.466.05,39.676,39.676,0,0,1,46.077.4a38.957,38.957,0,0,1,7.777,1.931A40.155,40.155,0,0,1,68.6,11.667a41.139,41.139,0,0,1,8.332,11.784,42.23,42.23,0,0,1,4.034,17.211A42.083,42.083,0,0,1,70.653,69.239a40.11,40.11,0,0,1-15.942,11.19A39.091,39.091,0,0,1,42.612,83a39.6,39.6,0,0,1-7.451-.307,39.2,39.2,0,0,1-7.981-1.947,39.736,39.736,0,0,1-11.626-6.528q-1.108-.894-2.157-1.861A41.176,41.176,0,0,1,4.639,60.812,41.815,41.815,0,0,1,.711,49.249a41.257,41.257,0,0,1-.632-5.288C.056,43.543.026,43.125,0,42.707m20.084.786c.066.316.126.612.191.908a52.456,52.456,0,0,0,5,13.616.251.251,0,0,0,.283.158,68.715,68.715,0,0,0,7.253-.964A64.163,64.163,0,0,0,44.085,54c.06-.023.118-.051.188-.082L37.821,39.8a57.327,57.327,0,0,1-17.737,3.694M41.389,38.3l6.443,14.1c.088-.038.157-.064.222-.1.932-.468,1.874-.918,2.794-1.409a54.873,54.873,0,0,0,10.942-7.652.294.294,0,0,0,.1-.348,57.766,57.766,0,0,0-5.914-13.979c-.037-.063-.078-.123-.128-.2A54.346,54.346,0,0,1,49,34.07a56.575,56.575,0,0,1-7.615,4.23m4.5,19.148a68.907,68.907,0,0,1-18.306,4.427c.366.52.7,1.006,1.044,1.482a41.209,41.209,0,0,0,9.348,9.361.565.565,0,0,0,.367.105c.839-.117,1.677-.24,2.511-.387a51.293,51.293,0,0,0,10.326-2.982c.054-.022.1-.052.16-.081l-5.45-11.924M39.782,34.783a51.52,51.52,0,0,0,13.93-9.369,45.341,45.341,0,0,0-9.437-9.886,39.68,39.68,0,0,1-9.95,7.316l5.457,11.939M66.388,14.915c-.043.071-.074.115-.1.162a48.275,48.275,0,0,1-7.479,10.66.234.234,0,0,0-.029.343,60.356,60.356,0,0,1,6.207,13.66c.023.073.055.143.1.257a1.2,1.2,0,0,1,.078-.116,46.754,46.754,0,0,0,8.688-13.545.418.418,0,0,0-.019-.365,37.833,37.833,0,0,0-6.188-9.681c-.406-.463-.831-.909-1.258-1.376M21.067,58.329c-.023-.057-.043-.113-.069-.165a55.239,55.239,0,0,1-3.057-7.568,55.966,55.966,0,0,1-1.737-6.808c-.037-.2-.1-.266-.317-.278-1.232-.067-2.466-.128-3.694-.249a47.875,47.875,0,0,1-7.062-1.236c-.412-.1-.824-.21-1.26-.322,0,.1,0,.181,0,.261a40,40,0,0,0,.558,6.112,38,38,0,0,0,2.537,8.593.385.385,0,0,0,.225.191c.307.084.62.143.932.209a52.639,52.639,0,0,0,6.043.94c1.573.144,3.152.231,4.729.314.716.038,1.436.006,2.17.006m-1.8-31.621c-.084,1.341-.2,2.659-.244,3.98a54.827,54.827,0,0,0,.4,8.771c.018.145.065.195.216.184.568-.041,1.137-.066,1.706-.1a49.253,49.253,0,0,0,5.405-.67,53.227,53.227,0,0,0,8.093-2.106c.453-.157.9-.322,1.372-.489L30.8,24.434a34.6,34.6,0,0,1-5.642,1.658,31.548,31.548,0,0,1-5.89.616m35.6,41.071c.078-.036.14-.061.2-.091.45-.235.9-.466,1.35-.708a48.44,48.44,0,0,0,7.435-4.956.418.418,0,0,0,.152-.26,56.439,56.439,0,0,0-.02-6.284,61.107,61.107,0,0,0-.873-7.284c-.048-.268-.1-.534-.163-.831a60.63,60.63,0,0,1-13.5,8.559l5.419,11.857m13.059-9.543L68,58.26c.044-.052.084-.107.131-.156A42.006,42.006,0,0,0,76.8,44.883a2.933,2.933,0,0,0,.228-1.082c.019-1.24.069-2.482.035-3.721a36.773,36.773,0,0,0-1.119-7.937c-.057-.229-.12-.457-.191-.725-.054.1-.085.15-.113.2A51.043,51.043,0,0,1,66.4,44.185a.346.346,0,0,0-.1.377,57.22,57.22,0,0,1,1.269,7.511c.167,1.727.242,3.462.35,5.195.02.322,0,.646,0,.969m-21.058-45.6a49.158,49.158,0,0,1,9.594,9.967c.044-.06.072-.106.107-.146a44.439,44.439,0,0,0,6.7-9.982c.147-.3.146-.3-.117-.514a36.187,36.187,0,0,0-9.615-5.619c-.711-.278-1.433-.527-2.165-.8a36.224,36.224,0,0,1-4.506,7.089M32.4,73.233c-.107-.1-.17-.156-.235-.213a45.613,45.613,0,0,1-4.705-4.869A48.466,48.466,0,0,1,23.3,62.33.273.273,0,0,0,23,62.175c-.216.019-.434.024-.65.028a62.754,62.754,0,0,1-7.42-.239c-1.456-.146-2.908-.342-4.36-.523-.413-.051-.822-.129-1.264-.2.053.095.087.16.125.222a37.277,37.277,0,0,0,7.961,9.263,1.8,1.8,0,0,0,.571.331A43.347,43.347,0,0,0,25.8,72.834a47.257,47.257,0,0,0,5.374.4c.385.007.77,0,1.22,0M15.547,39.63a58.981,58.981,0,0,1-.112-13.159,27.415,27.415,0,0,1-7.549-2.108c-.044.084-.077.143-.107.2a37.256,37.256,0,0,0-3.164,9.386c-.224,1.163-.363,2.343-.538,3.515-.019.129-.051.253.147.309A41.954,41.954,0,0,0,9.83,39.039c1.468.212,2.946.357,4.421.519.422.046.849.049,1.3.072M27.635,8.206l5.072,11.1c1.74-.639,7.477-4.8,8.3-6.021A37.681,37.681,0,0,0,31.8,9.169a35.926,35.926,0,0,0-4.16-.964M24.174,9.94a45.507,45.507,0,0,0-2.62,6.3,48.845,48.845,0,0,0-1.684,6.581,28.661,28.661,0,0,0,9.316-1.917L24.174,9.94m7.291-4.9a44.865,44.865,0,0,1,6.319,2.2,42.676,42.676,0,0,1,5.9,3.155,30.25,30.25,0,0,0,3.828-5.83,35.581,35.581,0,0,0-16.048.479m-11.936,5.62A36.952,36.952,0,0,0,9.793,20.971a23.291,23.291,0,0,0,6.177,1.668,53.817,53.817,0,0,1,3.559-11.977M43.285,75.906c.062.039.093.063.127.079a37,37,0,0,0,5.39,2.157.584.584,0,0,0,.3,0,34.167,34.167,0,0,0,4.584-1.463c.276-.109.549-.225.839-.345l-1.567-3.428a56.153,56.153,0,0,1-9.669,3m14.7-1.288c.066-.032.116-.053.162-.079A35.574,35.574,0,0,0,62.43,71.69a.553.553,0,0,0,.176-.3q.36-1.668.7-3.341c.056-.273.089-.551.14-.876a54.8,54.8,0,0,1-6.97,4.136l1.513,3.309M28.267,76.977c0,.017,0,.034,0,.051a35.209,35.209,0,0,0,12.8,2.14,1.15,1.15,0,0,0-.2-.137c-1.17-.682-2.342-1.361-3.508-2.05a.739.739,0,0,0-.457-.109c-1.014.072-2.028.174-3.043.189-1.518.023-3.036-.014-4.554-.032-.344,0-.689-.034-1.033-.053M73.373,58.04c-.031.036-.062.071-.092.107a48.189,48.189,0,0,1-5.314,5.462.705.705,0,0,0-.261.515c-.051.614-.122,1.227-.19,1.84-.04.361-.089.722-.134,1.083a35.146,35.146,0,0,0,5.991-9.007"
                  transform="translate(0 0.001)"
                  fill="url(#linear-gradient)"
                />
              </g>
            </g>
            <text
              id="DSME"
              transform="translate(288 64)"
              fill="#5dc1a3"
              fontSize="31"
              fontFamily="Montserrat-SemiBold, Montserrat"
              fontWeight="600"
            >
              <tspan x="0" y="0">
                DSME
              </tspan>
            </text>
            <text
              id="GLOBAL"
              transform="translate(288 93)"
              fill="#00040e"
              fontSize="31"
              fontFamily="Montserrat-Medium, Montserrat"
              fontWeight="500"
            >
              <tspan x="0" y="0">
                GLOBAL
              </tspan>
            </text>
          </g>
        </svg>
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
