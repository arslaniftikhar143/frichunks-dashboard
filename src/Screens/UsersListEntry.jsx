import React from "react";
import { DeleteButton } from "./DeleteButton";

export function UsersListEntry({
  setDeleteConfirmation,
  setDeleteConfirmationId,
}) {
  return (
    <div className="entry__info__row">
      <div className="entry__info__row__btns">
        <DeleteButton
          setDeleteConfirmation={setDeleteConfirmation}
          setDeleteConfirmationId={setDeleteConfirmationId}
        />
      </div>
      <div className="entry__info__row__text">User name</div>
      <div className="entry__info__row__text">Someone@gmail.com</div>
      <div className="entry__info__row__text">+92 12355356</div>
      <div className="entry__info__row__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, nemo.
      </div>
    </div>
  );
}
