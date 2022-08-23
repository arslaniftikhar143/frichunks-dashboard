import React from "react";
import { DeleteButton } from "./DeleteButton";

export function UsersListEntry({
  setDeleteConfirmation,
  setDeleteConfirmationId,
  data,
}) {
  return (
    <div className="entry__info__row">
      <div className="entry__info__row__btns">
        <DeleteButton
          setDeleteConfirmation={setDeleteConfirmation}
          setDeleteConfirmationId={setDeleteConfirmationId}
          id={data._id}
        />
      </div>
      <div className="entry__info__row__text">{data.username}</div>
      <div className="entry__info__row__text">{data.email}</div>
      <div className="entry__info__row__text">{data.phone}</div>
      <div className="entry__info__row__text">{data.address}</div>
    </div>
  );
}
