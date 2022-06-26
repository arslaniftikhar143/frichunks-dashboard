import React from "react";
import loading from "../Assets/loading.gif";

export default function Loader() {
  return (
    <div className="loader">
      <img src={loading} alt="Loader" className="loader__img" />
    </div>
  );
}
