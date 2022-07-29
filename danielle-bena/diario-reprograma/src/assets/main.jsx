import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("header")).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("footer")).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);