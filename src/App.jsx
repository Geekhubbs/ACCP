import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ReportIssuePage from "./pages/ReportIssuePage";
import TrackIssuePage from "./pages/TrackIssuePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import FAQPage from "./pages/FAQPage";
import ProofOfWorkPage from "./pages/ProofOfWorkPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

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
    </Routes>
  );
}

export default App;
