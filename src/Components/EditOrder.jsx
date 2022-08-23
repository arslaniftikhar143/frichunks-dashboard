import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import { userDataOption } from "../constants/userDataOptions";
import { productDataOption } from "../constants/productDataOption";
import { useEffect } from "react";

export default function EditOrder({ closeOnClick }) {
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState([]);
  const [products, setProducts] = useState([]);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("orderEntry") !== null) {
      const orderEntry = JSON.parse(window.localStorage.getItem("orderEntry"));
      setOrderId(orderEntry._id);
      setUser(orderEntry.user);
      setAddress(orderEntry.address);
      setStatus(orderEntry.status);
      setProducts(orderEntry.products);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put("https://frichunks.herokuapp.com/api/v1/order/edit", {
        _id: orderId,
        user: user,
        products: products,
        address: address,
        status: status,
      })
      .then((res) => {
        console.log(res.data);
      });

    closeOnClick(false);
  }

  return (
    <div className="popup__container">
      <form onSubmit={handleSubmit} className="popup__container__form">
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
            options={userDataOption}
            placeholder="User"
            required
            value={user}
            onChange={(e) => {
              setUser(e);
            }}
          />
        </div>
        <div className="popup__container__form__heading">Status</div>
        <div className="login__container__content__form__input">
          <Select
            options={[
              { value: "Pending", label: "Pending" },
              { value: "Delivered", label: "Delivered" },
            ]}
            placeholder="Status"
            required
            value={status}
            onChange={(e) => {
              setStatus(e);
            }}
          />
        </div>
        <div className="popup__container__form__heading">Address</div>
        <div className="login__container__content__form__input">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
          />
        </div>
        <div className="popup__container__form__heading">Products</div>
        <div className="login__container__content__form__input">
          <Select
            options={productDataOption}
            placeholder="Products"
            isMulti
            required
            value={products}
            onChange={(e) => {
              setProducts(e);
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
