import React, { useEffect, useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { ProductsListEntry } from "../Components/ProductsListEntry";
import axios from "axios";

export default function Products({
  isAdd,
  isEdit,
  setIsEdit,
  setIsAdd,
  setEditId,
}) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchData() {
    axios
      .get("https://frichunks.herokuapp.com/api/v1/product/get_all")
      .then((res) => {
        setLoading(false);
        setData(res.data);
      });
  }
  useEffect(() => {
    fetchData();
    window.addEventListener("focus", fetchData);
  }, [!isAdd, !isEdit]);

  const tableHeadingRow = [
    "",
    "Name",
    "Delivery Time",
    "Price",
    "Description",
    "Image",
  ];
  console.log(data);
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
              className="primary__button">
              Add
            </button>
          </div>
        </div>
        <div className="main__container__content">
          <div className="main__container__content__table">
            <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
            {loading ? (
              <div
                style={{
                  width: "100%",
                  height: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                Loading...
              </div>
            ) : data.length === 0 ? (
              <div
                style={{
                  width: "100%",
                  height: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                No Data{" "}
              </div>
            ) : (
              data.map((item) => (
                <ProductsListEntry
                  key={item._id}
                  data={item}
                  setIsEdit={setIsEdit}
                  setEditId={setEditId}
                  setDeleteConfirmation={setDeleteConfirmation}
                  setDeleteConfirmationId={setDeleteConfirmationId}
                />
              ))
            )}
          </div>
        </div>
      </div>
      {deleteConfirmation ? (
        <DeleteConfirmation
          closeOnClick={setDeleteConfirmation}
          deleteConfirmationURL="/product/delete"
          deleteConfirmationId={deleteConfirmationId}
          fetch={fetchData}
        />
      ) : null}
    </>
  );
}
