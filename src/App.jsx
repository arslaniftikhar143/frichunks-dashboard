import React, { useEffect, useState } from "react";
import { WidgetLoader } from "react-cloudinary-upload-widget";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteConfirmation from "./Screens/DeleteConfirmation";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Screens/Dashboard.jsx";
import Login from "./Screens/Login.jsx";
import Users from "./Screens/Users";
import Categories from "./Screens/Categories";
import Products from "./Screens/Products";
import Orders from "./Screens/Orders";
import OrderDetails from "./Screens/OrderDetails";
import EditCategory from "./Screens/EditCategory";
import AddCategory from "./Screens/AddCategory";
import AddProduct from "./Screens/AddProduct";
import EditProduct from "./Screens/EditProduct";

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

function App() {
  axios.defaults.headers.common["Bypass-Tunnel-Reminder"] = true;
  const navigate = useNavigate();
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [isEditProduct, setIsEditProduct] = useState(false);
  const [isAddCategory, setIsAddCategory] = useState(false);
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteConfirmationURL, setDeleteConfirmationURL] = useState("");
  const [deleteConfirmationId, setDeleteConfirmationId] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("user") === null) {
      navigate("/");
    }
  }, [window.location.pathname]);
  return (
    <>
      {isAddProduct ? <AddProduct closeOnClick={setIsAddProduct} /> : null}
      {isEditProduct ? <EditProduct closeOnClick={setIsEditProduct} /> : null}
      {isAddCategory ? <AddCategory closeOnClick={setIsAddCategory} /> : null}
      {isEditCategory ? (
        <EditCategory closeOnClick={setIsEditCategory} />
      ) : null}
      {deleteConfirmation ? (
        <DeleteConfirmation
          deleteConfirmationURL={deleteConfirmationURL}
          deleteConfirmationId={deleteConfirmationId}
        />
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
          <Route path="orders" element={<Orders />} />
          <Route path="order-details" element={<OrderDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
