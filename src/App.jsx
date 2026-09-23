import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ReportIssuePage from "./pages/ReportIssuePage";
import TrackIssuePage from "./pages/TrackIssuePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import FAQPage from "./pages/FAQPage";
import ProofOfWorkPage from "./pages/ProofOfWorkPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Reports from "./pages/admin/Reports";
import Users from "./pages/admin/Users";
import RoutingRules from "./pages/admin/RoutingRules";
import Settings from "./pages/admin/Settings";
import Districts from "./pages/admin/Districts";
import GovernmentOfficials from "./pages/admin/GovernmentOfficials";
import Categories from "./pages/admin/Categories";
import Institutions from "./pages/admin/Institutions";
import Permissions from "./pages/admin/Permissions";
import AuditLogs from "./pages/admin/AuditLogs";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/report" element={<ReportIssuePage />} />
      <Route path="/track" element={<TrackIssuePage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/faqs" element={<FAQPage />} />
      <Route path="/proof" element={<ProofOfWorkPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      {/* Unmatched routes fall back to Home for now */}
      <Route path="*" element={<HomePage />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reports" element={<Reports />} />
        <Route path="users" element={<Users />} />
        <Route path="routing-rules" element={<RoutingRules />} />
        <Route path="settings" element={<Settings />} />
        <Route path="districts" element={<Districts />} />
        <Route path="officials" element={<GovernmentOfficials />} />
        <Route path="categories" element={<Categories />} />
        <Route path="institutions" element={<Institutions />} />
        <Route path="permissions" element={<Permissions />} />
        <Route path="audit-logs" element={<AuditLogs />} />
      </Route>
    </Routes>
  );
}

export default App;
