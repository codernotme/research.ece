import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DashboardPage from "./dashboard/page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
