import React from "react";
import { MonthlyStatsCard } from "./MonthlyStatsCard";
import { StatsCard } from "./StatsCard";
import { UserStatisticsCard } from "./UserStatisticsCard";

export default function Dashboard() {
  return (
    <div className="dashboard__container">
      <div className="dashboard__container__col">
        <UserStatisticsCard />
        <StatsCard title="Total Revenue" stroke="#FF5733" />
      </div>
      <div className="dashboard__container__col">
        <MonthlyStatsCard
          valueInPercentage="56%"
          stroke="#FF5733"
          labal="Users"
        />
        <MonthlyStatsCard
          valueInPercentage="40%"
          stroke="#00040e"
          labal="Orders"
        />
        <StatsCard title="Pending Orders" stroke="#00040e" />
      </div>
    </div>
  );
}
