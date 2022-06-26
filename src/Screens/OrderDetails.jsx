import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { OrdersDetailsListEntry } from "../Components/OrdersDetailsListEntry";

export default function OrderDetails({}) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  const tableHeadingRow = [
    "Name",
    "Delivery Time",
    "Price",
    "Size",
    "Quantity",
    "Description",
    "Image",
  ];

  return (
    <>
      <div className="main__container">
        <div className="main__container__header">
          <div className="main__container__header__heading">Order Details</div>
          <div className="main__container__header__buttons"></div>
        </div>
        <div className="main__container__content">
          <div className="main__container__content__table">
            <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
            <OrdersDetailsListEntry />
            <OrdersDetailsListEntry />
            <OrdersDetailsListEntry />
            <OrdersDetailsListEntry />
            <OrdersDetailsListEntry />
            <OrdersDetailsListEntry />
            <OrdersDetailsListEntry />
            <OrdersDetailsListEntry />
            <OrdersDetailsListEntry />
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
