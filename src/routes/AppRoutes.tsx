import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ROUTES } from "../utils/RoutingConstant";

// Lazy load components
const Login = lazy(() => import("../pages/Signin"));
const Home = lazy(() => import("../pages/Home"));

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default AppRoutes
