"use client";
import { Routes, Route } from "react-router-dom";
import JournalForm from "../components/Dashboard/JournalForm";
import DashboardContent from "../components/Dashboard/DashboardContent";
import AppSidebar from "../components/Dashboard/Menu";

const DashboardPage = () => {
  return (
    <>
      <main className="min-h-screen flex flex-row">
      <AppSidebar />
      <div className="w-full mx-auto min-h-screen">
          <Routes>
            <Route path="/journal-form" element={<JournalForm />} />
            <Route path="/" element={<DashboardContent />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;
