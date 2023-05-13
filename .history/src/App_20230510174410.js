import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "store/auth/auth-slice";
import { getToken } from "utils/auth";
import { closeMenu } from "store/menu/menu-slice";
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
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const CampaignView = lazy(() => import("./campaign/CampaignView"));

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  const { user } = useSelector((state) => state.auth);
  const { isOpen } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  let location = useLocation();
  React.useEffect(() => {
    if (!user) {
      let { refreshToken: token } = getToken();
      console.log(token);
      if (token) {
        console.log("ok");
        dispatch(refreshToken(token));
      }
    }
  }, [dispatch, user]);
  React.useEffect(() => {
    if (isOpen) {
      dispatch(closeMenu());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location]);
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen">
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
            <Route path="/profile" element={<ProfilePage />}></Route>
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
