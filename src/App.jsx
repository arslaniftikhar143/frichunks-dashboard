import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { WidgetLoader } from "react-cloudinary-upload-widget";
import axios from "axios";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Screens/Dashboard.jsx";
import Login from "./Screens/Login.jsx";
import Users from "./Screens/Users";
import Categories from "./Screens/Categories";
import Products from "./Screens/Products";
import Orders from "./Screens/Orders";
import OrderDetails from "./Screens/OrderDetails";
import EditCategory from "./Components/EditCategory";
import AddCategory from "./Components/AddCategory";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import AddOrder from "./Components/AddOrder";
import EditOrder from "./Components/EditOrder";

function Main() {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default function App() {
  axios.defaults.headers.common["Bypass-Tunnel-Reminder"] = true;
  const navigate = useNavigate();
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [isEditProduct, setIsEditProduct] = useState(false);
  const [isAddCategory, setIsAddCategory] = useState(false);
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [isAddOrder, setIsAddOrder] = useState(false);
  const [isEditOrder, setIsEditOrder] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("user") === null) {
      navigate("/");
    }
  }, [window.location.pathname]);
  return (
    <>
      {isAddOrder ? <AddOrder closeOnClick={setIsAddOrder} /> : null}
      {isEditOrder ? <EditOrder closeOnClick={setIsEditOrder} /> : null}
      {isAddProduct ? <AddProduct closeOnClick={setIsAddProduct} /> : null}
      {isEditProduct ? <EditProduct closeOnClick={setIsEditProduct} /> : null}
      {isAddCategory ? <AddCategory closeOnClick={setIsAddCategory} /> : null}
      {isEditCategory ? (
        <EditCategory closeOnClick={setIsEditCategory} />
      ) : null}

      <WidgetLoader />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Main />}>
          <Route path="" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route
            path="categories"
            element={
              <Categories
                setIsEdit={setIsEditCategory}
                isEdit={isEditCategory}
                setIsAdd={setIsAddCategory}
                isAdd={isAddCategory}
              />
            }
          />
          <Route
            path="products"
            element={
              <Products
                setIsEdit={setIsEditProduct}
                isEdit={isEditProduct}
                setIsAdd={setIsAddProduct}
                isAdd={isAddProduct}
              />
            }
          />
          <Route
            path="orders"
            element={
              <Orders
                setIsAdd={setIsAddOrder}
                isAdd={isAddOrder}
                setIsEdit={setIsEditOrder}
                isEdit={isEditOrder}
              />
            }
          />
          <Route path="order-details" element={<OrderDetails />} />
        </Route>
      </Routes>
    </>
  );
}
