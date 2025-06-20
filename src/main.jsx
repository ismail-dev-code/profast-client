import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

AOS.init();


createRoot(document.getElementById("root")).render(
  <StrictMode>
     <ToastContainer position="top-right" />
    <div className="font-urbanist">
      <AuthProvider>
        {" "}
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>
);
