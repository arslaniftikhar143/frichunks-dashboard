import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "./DeleteConfirmation";
import { ProductsListEntry } from "./ProductsListEntry";

export default function Products({ setIsEdit, setIsAdd, setEditId }) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const tableHeadingRow = [
    "",
    "Name",
    "Delivery Time",
    "Price",
    "Description",
    "Image",
  ];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Products</div>
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
            <ProductsListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <ProductsListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <ProductsListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <ProductsListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <ProductsListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <ProductsListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <ProductsListEntry
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
