import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import { DeleteButton } from "../Components/DeleteButton";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { EditButton } from "../Components/EditButton";

export default function Categories({ setIsEdit, setIsAdd, setEditId }) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const tableHeadingRow = ["", "Name", "Image"];
  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Categories</div>
          <div className="main__container__header__buttons">
            <button
              onClick={() => {
                setIsAdd(true);
              }}
              className="primary__button"
            >
              Add
            </button>
          </div>
        </div>
        <div className="main__container__content">
          <div className="main__container__content__table">
            <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <CategoryListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
          </div>
        </div>
      </div>
      {deleteConfirmation ? (
        <DeleteConfirmation
          closeOnClick={setDeleteConfirmation}
          deleteConfirmationURL=""
          deleteConfirmationId={deleteConfirmationId}
          fetch={() => {}}
        />
      ) : null}
    </>
  );
}

function CategoryListEntry({
  setIsEdit,
  setEditId,
  setDeleteConfirmation,
  setDeleteConfirmationId,
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
      <div className="entry__info__row__text">Category name</div>
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
