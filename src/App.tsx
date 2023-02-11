import React from "react";
import Login from "./pages/login-page";
import { Toaster } from "react-hot-toast";

type Props = {};

const toasterOptions = {
  style: {
    fontWeight: 500
  },
};

const App = (props: Props) => {
  document.title = "SANBOX";
  return (
    <>
      <Toaster toastOptions={toasterOptions} />
      <Login />
    </>
  );
};

export default App;
