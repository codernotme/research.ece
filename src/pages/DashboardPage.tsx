"use client";
import { Routes, Route } from "react-router-dom";
import JournalForm from "../components/Dashboard/JournalForm";
import DashboardContent from "../components/Dashboard/DashboardContent";
import DashboardSidebar from "../components/Dashboard/Menu";

const DashboardPage = () => {
  return (
    <>
      <main className="min-h-screen flex flex-row">
        <DashboardSidebar />
        <div className="flex-1">
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
