import React from "react";
import { MonthlyStatsCard } from "../Components/MonthlyStatsCard";
import { StatsCard } from "../Components/StatsCard";
import { CategoryStatisticsCard } from "../Components/CategoryStatisticsCard";

export default function Dashboard() {
  return (
    <div className="dashboard__container">
      <div className="dashboard__container__col">
        <CategoryStatisticsCard />
        <StatsCard
          title="Total Revenue"
          stroke="#FF5733"
          value={"RS " + "2000"}
        />
      </div>
      <div className="dashboard__container__col">
        <MonthlyStatsCard
          valueInPercentage="76%"
          stroke="#FF5733"
          labal="New Users"
        />
        <MonthlyStatsCard
          valueInPercentage="40%"
          stroke="#00040e"
          labal="Orders"
        />
        <StatsCard title="Pending Orders" stroke="#00040e" value={45} />
      </div>
    </div>
  );
}
