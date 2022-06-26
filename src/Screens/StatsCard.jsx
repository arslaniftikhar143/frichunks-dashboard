import React from "react";
import chart from "../Assets/Chart.png";

export function StatsCard({ stroke, title, value }) {
  return (
    <div className="stats__card" style={{ backgroundColor: stroke }}>
      <img src={chart} alt="chart" className="stats__card__img" />
      <div className="stats__card__content">
        <div className="stats__card__content__heading">{title}</div>
        <div className="stats__card__content__value">{value}</div>
      </div>
    </div>
  );
}
