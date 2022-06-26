import React, { useState, useEffect } from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import Loader from "./Loader";
import DeleteConfirmation from "./DeleteConfirmation";
import { parseDate } from "../utils/parseDate";
import axios from "axios";

export default function OrderDetails({ isAdd, isEdit }) {
  const [BlogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  useEffect(() => {
    axios
      .get(`https://dsmeglobal-api.herokuapp.com/api/v1/get_blog`)
      .then((res) => {
        setBlogData(res.data);
        setLoading(false);
      });
  }, [!isAdd, !isEdit, !deleteConfirmation]);

  const tableHeadingRow = [
    { heading: "Name" },
    { heading: "Image" },
    { heading: "Description" },
    { heading: "Delivery Time" },
    { heading: "Price" },
    { heading: "Size" },
    { heading: "Quantity" },
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
            {loading ? (
              <Loader />
            ) : (
              <>
                {BlogData.length > 0 ? (
                  BlogData.map((item, i) => (
                    <div className="entry__info__row" key={i}>
                      <div className="entry__info__row__text">{item.title}</div>
                      <div className="entry__info__row__text">
                        {parseDate(item.updatedAt)}
                      </div>
                      <div className="entry__info__row__text">
                        {item.author}
                      </div>
                      {item.categories.length < 40 ? (
                        <div className="entry__info__row__text">
                          {item.categories.map(
                            (category) => category.label + ", "
                          )}
                        </div>
                      ) : (
                        <div className="entry__info__row__text">
                          <a>
                            Categories
                            <div className="entry__info__row__text__message">
                              {item.categories.map((category, i) =>
                                i < item.categories.length
                                  ? category.label + ", "
                                  : category.label
                              )}
                            </div>
                          </a>
                        </div>
                      )}
                      <div className="entry__info__row__text">
                        <img
                          src={
                            "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                            item.image
                          }
                          alt="tableEntryPic"
                          className="entry__info__row__text__img"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    No Data yet
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {deleteConfirmation ? (
        <DeleteConfirmation
          closeOnClick={setDeleteConfirmation}
          deleteConfirmationURL="delete_blog"
          deleteConfirmationId={deleteConfirmationId}
          fetch={() => {
            setLoading(true);
            axios
              .get(`https://dsmeglobal-api.herokuapp.com/api/v1/get_blog`)
              .then((res) => {
                setBlogData(res.data);
                setLoading(false);
              });
          }}
        />
      ) : null}
    </>
  );
}
