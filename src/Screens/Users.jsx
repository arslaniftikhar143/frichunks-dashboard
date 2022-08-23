import React, { useState } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { UsersListEntry } from "../Components/UsersListEntry";
import { useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchData() {
    axios
      .get("https://frichunks.herokuapp.com/api/v1/user/get_all")
      .then((res) => {
        setLoading(false);
        setData(res.data.filter((item) => item.isAdmin === false));
      });
  }
  useEffect(() => {
    fetchData();
    window.addEventListener("focus", fetchData);
  }, []);

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
                <UsersListEntry
                  key={item._id}
                  data={item}
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
          deleteConfirmationURL="/user/delete"
          deleteConfirmationId={deleteConfirmationId}
          fetch={fetchData}
        />
      ) : null}
    </>
  );
}
