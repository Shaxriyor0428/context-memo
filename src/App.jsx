import React, { memo } from "react";
import MainRouter from "./routes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <MainRouter />
      <ToastContainer />
    </>
  );
}

export default memo(App);
