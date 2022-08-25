import React from "react";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";
import { getText } from "../utils/getText";
import { parseTime } from "../utils/parseTime";
export function ProductsListEntry({
  setIsEdit,
  setEditId,
  setDeleteConfirmation,
  setDeleteConfirmationId,
  data,
}) {
  const description = getText(data.description);

  return (
    <div className="entry__info__row">
      <div className="entry__info__row__btns">
        <EditButton setIsEdit={setIsEdit} setEditId={setEditId} item={data} />
        <DeleteButton
          setDeleteConfirmation={setDeleteConfirmation}
          setDeleteConfirmationId={setDeleteConfirmationId}
          id={data._id}
        />
      </div>
      <div className="entry__info__row__text">{data.name}</div>
      <div className="entry__info__row__text">{parseTime(data.createdAt)}</div>
      <div className="entry__info__row__text">{data.price}</div>
      <div className="entry__info__row__text">
        {description.length > 70 ? (
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
          src={
            "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
            data.image
          }
          alt="tableEntryPic"
          className="entry__info__row__text__img"
        />
      </div>
    </div>
  );
}
