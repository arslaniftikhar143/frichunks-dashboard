import React from "react";
import { useNavigate } from "react-router-dom";

export function NavLink({ title, svg, path, defaultChecked, id, onClick }) {
  const navigate = useNavigate();
  return (
    <div className="sidebar__container__content__entry">
      <input
        type="radio"
        name="sidebar__container__content__entry__input"
        id={id ? id : "sidebar__container__content__entry__input"}
        className="sidebar__container__content__entry__input"
        checked={window.location.pathname === path}
        onChange={() => {
          navigate(path);
        }}
        onClick={onClick}
      />
      <div className="nav__bar__content__link__content">
        <div className="nav__bar__content__link__content__svg__wrapper">
          {svg}
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
}
