"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the main App component
import "./index.css"; // Import global styles
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import NotFound from "./components/NotFound";
import TermsAndConditions from "./components/TermsAndConditions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />} />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
          errorElement={<ErrorPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  </React.StrictMode>
);
