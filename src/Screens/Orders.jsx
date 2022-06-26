import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "./DeleteConfirmation";
import { useNavigate } from "react-router-dom";
import { OrdersListEntry } from "./OrdersListEntry";

export default function Orders({ setIsEdit, setIsAdd, setEditId }) {
  const navigate = useNavigate();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const tableHeadingRow = ["", "User", "Date", "Status", "Address"];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Orders</div>
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
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
            />
            <OrdersListEntry
              setIsEdit={setIsEdit}
              setEditId={setEditId}
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
              navigate={navigate}
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
