import React, { useState, useEffect } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import { DeleteButton } from "../Components/DeleteButton";
import DeleteConfirmation from "../Components/DeleteConfirmation";
import { EditButton } from "../Components/EditButton";
import axios from "axios";

export default function Categories({
  isAdd,
  isEdit,
  setIsEdit,
  setIsAdd,
  setEditId,
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchData() {
    axios
      .get("https://frichunks.herokuapp.com/api/v1/category/get_all")
      .then((res) => {
        setLoading(false);
        setData(res.data);
      });
  }
  useEffect(() => {
    fetchData();
    window.addEventListener("focus", fetchData);
  }, [!isAdd, !isEdit]);

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
                <CategoryListEntry
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
          deleteConfirmationURL="/category/delete"
          deleteConfirmationId={deleteConfirmationId}
          fetch={fetchData}
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
  data,
}) {
  console.log(data.image);
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
