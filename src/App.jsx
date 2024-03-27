/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductDetailsPage from "./components/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import Checkout from "./pages/Checkout";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [activeTab, setActiveTab] = useState("Home");
  const dispatch = useDispatch();

 
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (slug, productName) => {
    
    const product = data.find(
      (product) => product.slug === slug || product.name === productName
    );

    
    if (product) {
      console.log(
        `Navigate to product details page for product with ID: ${product.id}`
      );
      
    } else {
      console.log(`Product not found`);
    }
  };

  const categoryTab = data.map((item) => ({
    title: item.category,
    path: `/category/${item.category.toLowerCase().replace(" ", "-")}`,
  }));

  const handleTabChange = (title) => {
    setActiveTab(title);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <Layout
              data={data}
              categoryTab={categoryTab}
              handleTabChange={handleTabChange}
              cartItems={cartItems}
            >
              <Home data={data} handleButtonClick={handleButtonClick} />
            </Layout>
          }
        />

        <Route
          path="/category/:categoryName"
          element={
            <Layout
            cartItems={cartItems}
              data={data}
              categoryTab={categoryTab}
              handleTabChange={handleTabChange}
            >
              <CategoryPage
                data={data}
                handleButtonClick={handleButtonClick}
              />
            </Layout>
          }
        />
        

        <Route
          path="/product/:productName"
          element={
            <Layout
            cartItems={cartItems}
              data={data}
              categoryTab={categoryTab}
              handleTabChange={handleTabChange}
            >
              <ProductDetailsPage
                product={data}
                handleButtonClick={handleButtonClick}
                cartItems={cartItems}
                dispatch={dispatch}
              />
            </Layout>
          }
        />
        <Route
          path="/product/:slug"
          element={
            <Layout
              data={data}
              categoryTab={categoryTab}
              handleTabChange={handleTabChange}
              cartItems={cartItems}
            >
              <ProductDetailsPage
                product={data}
                handleButtonClick={handleButtonClick}
                cartItems={cartItems}
                dispatch={dispatch}
              />
            </Layout>
          }
        />
         <Route
          path="/checkout"
          element={
            <Layout
              data={data}
              categoryTab={categoryTab}
              handleTabChange={handleTabChange}
              cartItems={cartItems}
            >
              <Checkout
                product={data}
                handleButtonClick={handleButtonClick}
                cartItems={cartItems}
                dispatch={dispatch}
              />
            </Layout>
          }
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
