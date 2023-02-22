import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux-store/store";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import rootRouter from "./router";


const toasterOptions = {
  style: {
    fontWeight: 500,
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
  <Provider store={store}>
    <ChakraProvider>
      <Toaster toastOptions={toasterOptions} />
      <RouterProvider router={rootRouter} />
    </ChakraProvider>
  </Provider>
);
