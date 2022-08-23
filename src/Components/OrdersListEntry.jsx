import React from "react";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";
import { ViewButton } from "../Components/ViewButton";
import { parseDate } from "../utils/parseDate";

export function OrdersListEntry({
  setIsEdit,
  setEditId,
  setDeleteConfirmation,
  setDeleteConfirmationId,
  navigate,
  data,
}) {
  return (
    <div className="entry__info__row">
      <div className="entry__info__row__btns">
        <EditButton setIsEdit={setIsEdit} setEditId={setEditId} />
        <DeleteButton
          setDeleteConfirmation={setDeleteConfirmation}
          setDeleteConfirmationId={setDeleteConfirmationId}
          id={data._id}
        />
      </div>
      <div className="entry__info__row__text">
        {data.user.map((item) => item.label)}
      </div>
      <div className="entry__info__row__text">{parseDate(data.createdAt)}</div>
      <div className="entry__info__row__text">
        {data.status.map((item) => item.label)}
      </div>
      <div className="entry__info__row__text">{data.address}</div>
      <div className="entry__info__row__btns">
        <ViewButton navigate={navigate} />
      </div>
    </div>
  );
}
