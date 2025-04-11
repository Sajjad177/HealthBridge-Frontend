import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.tsx";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        richColors
        toastOptions={{ duration: 500 }}
      />
    </PersistGate>
  </Provider>
);
