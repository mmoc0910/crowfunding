import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal";

const DashboardLayout = lazy(() => import("./layouts/LayoutDashboard"));
const LayoutPayment = lazy(() => import("./layouts/LayoutPayment"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const SigninPage = lazy(() => import("./pages/SignInPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const PaymentsPage = lazy(() => import("./pages/PaymentsPage"));
const WithdrawPage = lazy(() => import("./pages/WithdrawPage"));
const CampaignView = lazy(() => import("./campaign/CampaignView"));

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen dark:text-white dark:bg-dark-secondary">
          loading
        </div>
      }
    >
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/campaign" element={<CampaignPage />}></Route>
          <Route path="/campaign/:slug" element={<CampaignView />}></Route>
          <Route
            path="/campaign/start-campaign"
            element={<StartCampaignPage />}
          ></Route>
          <Route path="/payments" element={<PaymentsPage />}></Route>
          <Route path="/withdraw" element={<WithdrawPage />}></Route>
        </Route>
        <Route element={<LayoutPayment />}>
          <Route path="campaign/checkout" element={<CheckoutPage />}></Route>
        </Route>

        <Route path="/sign-up" element={<SignupPage />}></Route>
        <Route path="/sign-in" element={<SigninPage />}></Route>
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center w-screen h-screen text-3xl font-semibold">
              404 Page Not Found
            </div>
          }
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
