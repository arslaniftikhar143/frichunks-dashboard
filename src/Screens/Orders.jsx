import React, { useEffect, useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { useNavigate } from "react-router-dom";
import { OrdersListEntry } from "../Components/OrdersListEntry";
import axios from "axios";

export default function Orders({ setIsEdit, setIsAdd, setEditId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchData() {
    axios
      .get("https://frichunks.herokuapp.com/api/v1/order/get_all")
      .then((res) => {
        setLoading(false);
        setData(res.data);
      });
  }
  useEffect(() => {
    fetchData();
    window.addEventListener("focus", fetchData);
  }, []);

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
            {loading ? (
              <div
                style={{
                  width: "100%",
                  height: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
                }}
              >
                No Data{" "}
              </div>
            ) : (
              data.map((item) => (
                <OrdersListEntry
                  key={item._id}
                  data={item}
                  setIsEdit={setIsEdit}
                  setEditId={setEditId}
                  setDeleteConfirmation={setDeleteConfirmation}
                  setDeleteConfirmationId={setDeleteConfirmationId}
                  navigate={navigate}
                />
              ))
            )}
          </div>
        </div>
      </div>
      {deleteConfirmation ? (
        <DeleteConfirmation
          closeOnClick={setDeleteConfirmation}
          deleteConfirmationURL="/order/delete"
          deleteConfirmationId={deleteConfirmationId}
          fetch={fetchData}
        />
      ) : null}
    </>
  );
}
