import React from "react";
import UserStatisticsChart from "../Components/UserStatisticsChart";
import { UserFrom } from "./UserFrom";

export function CategoryStatisticsCard() {
  return (
    <div className="user__statistics__card">
      <div className="user__statistics__card__header">
        <div className="user__statistics__card__header__heading">
          Categories sold
        </div>
        <div className="user__statistics__card__header__date">
          15 April - 15 May
        </div>
      </div>
      <div className="user__statistics__card__content">
        <div className="user__statistics__card__content__left">
          <UserStatisticsChart />
        </div>
        <div className="user__statistics__card__content__right">
          <UserFrom stroke="#FF5733" label="Pizza" />
          <UserFrom stroke="#0A2751" label="Burggers" />
          <UserFrom stroke="#00040e" label="Fries" />
          <UserFrom stroke="#0B5FD8" label="Drinks" />
        </div>
      </div>
    </div>
  );
}
