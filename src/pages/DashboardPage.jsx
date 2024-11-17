import Menu from "../components/Dashboard/Menu";
import { Routes, Route } from "react-router-dom";
import JournalForm from "../components/Dashboard/JournalForm";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-11 h-screen">
      {/* Sidebar Menu */}
      <Menu />

      {/* Main Content */}
      <div className="col-span-9 bg-gray-100">
        <Routes>
          <Route path="/journal-form" element={<JournalForm />} />
          {/* Add more routes for other sections */}
          <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardPage;
