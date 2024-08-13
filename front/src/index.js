import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/* 리덕스 */
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productListReducer from "./reducer/reducer_ryu/productListReducer.js";
import cartReducer from "./reducer/reducer_hidori/cartReducer.js";
import memberReducer from "./reducer/reducer_hoon/memberReducer.js";
import wishReducer from "./reducer/reducer_hidori/wishReducer.js";

/* 스토어 */
const store = configureStore({
  reducer: {
    productList: productListReducer,
    cart: cartReducer,
    member: memberReducer,
    wish: wishReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
