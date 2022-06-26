import React from "react";

export function EntryHeadingData({ value }) {
  return (
    <div
      className="table__container__header__entry"
      style={value === "" ? { maxWidth: 100, minWidth: 100 } : null}
    >
      {value}
    </div>
  );
}
