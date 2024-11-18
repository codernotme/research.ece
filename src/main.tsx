"use client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { ConvexReactClient } from "convex/react";
import App from "./App.tsx";
import "./index.css";
import { Unauthenticated, Authenticated } from "convex/react";
import { SignIn } from "./components/Auth/Login.tsx";
import Navbar from "./components/Navbar.tsx";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexAuthProvider client={convex}>
      <main className="min-h-screen w-full flex flex-col">
        <Unauthenticated>
          <SignIn />
        </Unauthenticated>
        <Authenticated>
          <Navbar />
          <App />
        </Authenticated>
      </main>
    </ConvexAuthProvider>
  </React.StrictMode>
);
