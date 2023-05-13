import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const SigninPage = lazy(() => import("./pages/SignInPage"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/campaign" element={<CampaignPage />}></Route>
        <Route
          path="/campaign/start-campaign"
          element={<CampaignPage />}
        ></Route>
        <Route path="/sign-up" element={<SignupPage />}></Route>
        <Route path="/sign-in" element={<SigninPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
