import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserFromLocalStorage } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserFromLocalStorage());
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
