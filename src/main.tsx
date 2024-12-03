"use client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ConvexReactClient } from "convex/react";
import "./index.css";
import { Unauthenticated, Authenticated } from "convex/react";
import { SignIn } from "./auth/Login.tsx";
import Navbar from "./components/Navbar.tsx";
import MainPage from "./pages/MainPage.tsx";
import DashboardPage from "./dashboard/Dashmain.tsx";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexAuthProvider client={convex}>
      <main className="min-h-screen w-full flex flex-col">
        <Unauthenticated>
          <SignIn />
        </Unauthenticated>
        <Authenticated>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/dashboard/*" element={<DashboardPage />} />
            </Routes>
          </Router>
        </Authenticated>
      </main>
    </ConvexAuthProvider>
  </React.StrictMode>
);
