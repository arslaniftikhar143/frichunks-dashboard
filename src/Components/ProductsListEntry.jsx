import React from "react";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

export function ProductsListEntry({
  setIsEdit,
  setEditId,
  setDeleteConfirmation,
  setDeleteConfirmationId,
}) {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit..";

  return (
    <div className="entry__info__row">
      <div className="entry__info__row__btns">
        <EditButton setIsEdit={setIsEdit} setEditId={setEditId} />
        <DeleteButton
          setDeleteConfirmation={setDeleteConfirmation}
          setDeleteConfirmationId={setDeleteConfirmationId}
        />
      </div>
      <div className="entry__info__row__text">Pizza</div>
      <div className="entry__info__row__text">10:30 PM</div>
      <div className="entry__info__row__text">RS 1250</div>
      <div className="entry__info__row__text">
        {description.length > 100 ? (
          <a href="">
            View Description
            <div className="entry__info__row__text__message">{description}</div>
          </a>
        ) : (
          description
        )}
      </div>
      <div className="entry__info__row__text">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="tableEntryPic"
          className="entry__info__row__text__img"
        />
      </div>
    </div>
  );
}
