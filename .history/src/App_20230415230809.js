import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal";

const DashboardLayout = lazy(() => import("./layouts/LayoutDashboard"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const SigninPage = lazy(() => import("./pages/SignInPage"));
const CampaignView = lazy(() => import("./campaign/CampaignView"));
const customStyles = {
  content: {},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#yourAppElement");
function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/campaign" element={<CampaignPage />}></Route>
          <Route path="/campaign/:slug" element={<CampaignView />}></Route>
          <Route
            path="/campaign/start-campaign"
            element={<StartCampaignPage />}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignupPage />}></Route>
        <Route path="/sign-in" element={<SigninPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
