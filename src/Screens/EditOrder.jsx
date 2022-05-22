import axios from "axios";
import React, { useEffect, useState } from "react";
import { Widget } from "react-cloudinary-upload-widget";
import Select from "react-select";
import catagoryDataOption from "../constants/constant";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function EditOrder({ closeOnClick, editId }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [categories, setCategories] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  // console.log({
  //   _id: editId._id,
  //   title: name,
  //   image: image === "" ? oldImage : image,
  //   categories: categories,
  //   author: author,
  //   content: content,
  // });
  // useEffect(() => {
  //   setName(editId.title);
  //   setOldImage(editId.image);
  //   setCategories(editId.categories);
  //   setAuthor(editId.author);
  //   setContent(editId.content);
  // }, [editId]);
  return (
    <div className="popup__container">
      <form
        onSubmit={() => {
          closeOnClick(false);
          axios.put(`https://dsmeglobal-api.herokuapp.com/api/v1/update_blog`, {
            _id: editId._id,
            title: name,
            image: image === "" ? oldImage : image,
            categories: categories,
            author: author,
            content: content,
          });
        }}
        className="popup__container__form"
      >
        <div className="popup__container__form__header">
          <div>Edit Order</div>
          <button
            onClick={() => {
              closeOnClick(false);
            }}
            type="button"
            className="popup__container__form__close__btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.829"
              height="14.829"
              viewBox="0 0 14.829 14.829"
            >
              <g id="x" transform="translate(-4.586 -4.586)">
                <line
                  id="Line_20"
                  data-name="Line 20"
                  x1="12"
                  y2="12"
                  transform="translate(6 6)"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  id="Line_21"
                  data-name="Line 21"
                  x2="12"
                  y2="12"
                  transform="translate(6 6)"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="popup__container__form__heading">User</div>
        <div className="login__container__content__form__input">
          <Select
            options={catagoryDataOption}
            placeholder="User"
            required
            value={categories}
            onChange={(e) => {
              setCategories(e);
            }}
          />
        </div>
        <div className="popup__container__form__heading">Status</div>
        <div className="login__container__content__form__input">
          <Select
            options={catagoryDataOption}
            placeholder="Status"
            required
            value={categories}
            onChange={(e) => {
              setCategories(e);
            }}
          />
        </div>
        <div className="popup__container__form__heading">Address</div>
        <div className="login__container__content__form__input">
          <input
            type="text"
            placeholder="Address"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            required
          />
        </div>
        <div className="popup__container__form__heading">Products</div>
        <div className="login__container__content__form__input">
          <Select
            options={catagoryDataOption}
            placeholder="Products"
            isMulti
            required
            value={categories}
            onChange={(e) => {
              setCategories(e);
            }}
          />
        </div>
        <button
          type="submit"
          style={{ marginTop: "1em", marginBottom: "1em" }}
          className="secondary__button"
        >
          Edit
        </button>
      </form>
    </div>
  );
}
