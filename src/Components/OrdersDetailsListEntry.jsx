import React from "react";

export function OrdersDetailsListEntry({}) {
  return (
    <div className="entry__info__row">
      <div className="entry__info__row__text">Product name</div>
      <div className="entry__info__row__text">10:30pm</div>
      <div className="entry__info__row__text">RS 200</div>
      <div className="entry__info__row__text">
        <a>
          Categories
          <div className="entry__info__row__text__message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            officiis beatae sed maiores architecto animi accusantium cupiditate
            unde. Neque, corrupti?
          </div>
        </a>
      </div>
      <div className="entry__info__row__text">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="tableEntryPic"
          className="entry__info__row__text__img"
        />
      </div>
    </div>
  );
}
