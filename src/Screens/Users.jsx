import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "./DeleteConfirmation";
import { UsersListEntry } from "./UsersListEntry";

export default function Users() {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const tableHeadingRow = ["", "Name", "Email", "Phone", "Address"];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Users</div>
          <div className="main__container__header__buttons"></div>
        </div>
        <div className="main__container__content">
          <div className="main__container__content__table">
            <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
            <UsersListEntry
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <UsersListEntry
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <UsersListEntry
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <UsersListEntry
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <UsersListEntry
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <UsersListEntry
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <UsersListEntry
              setDeleteConfirmation={setDeleteConfirmation}
              setDeleteConfirmationId={setDeleteConfirmationId}
            />
            <UsersListEntry
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
