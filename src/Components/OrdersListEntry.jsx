import React from "react";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";
import { ViewButton } from "../Components/ViewButton";

export function OrdersListEntry({
  setIsEdit,
  setEditId,
  setDeleteConfirmation,
  setDeleteConfirmationId,
  navigate,
}) {
  return (
    <div className="entry__info__row">
      <div className="entry__info__row__btns">
        <EditButton setIsEdit={setIsEdit} setEditId={setEditId} />
        <DeleteButton
          setDeleteConfirmation={setDeleteConfirmation}
          setDeleteConfirmationId={setDeleteConfirmationId}
        />
      </div>
      <div className="entry__info__row__text">User Name</div>
      <div className="entry__info__row__text">10/20/2020</div>
      <div className="entry__info__row__text">Paid</div>
      <div className="entry__info__row__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, maiores!
      </div>
      <div className="entry__info__row__btns">
        <ViewButton navigate={navigate} />
      </div>
    </div>
  );
}
