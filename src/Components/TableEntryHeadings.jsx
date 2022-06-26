import React from "react";
import { EntryHeadingData } from "./EntryHeadingData";

export default function TableEntryHeadings({ tableHeadingEntryRow }) {
  return (
    <div className="table__container__header">
      {tableHeadingEntryRow.map((item, i) => (
        <EntryHeadingData key={i} value={item} />
      ))}
    </div>
  );
}
