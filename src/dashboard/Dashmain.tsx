"use client";
import { Routes, Route } from "react-router-dom";
import JournalForm from "./JournalForm";
import DashboardContent from "./DashboardContent";
import DashboardSidebar from "./Menu";

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
