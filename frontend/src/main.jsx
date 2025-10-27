import React from "react";

import { createRoot } from "react-dom/client";
import App from "../src/components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProviders from "./contexts/UserProviders.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProviders>
        <App />
      </UserProviders>
    </BrowserRouter>
  </React.StrictMode>
);
