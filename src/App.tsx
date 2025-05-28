import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { setUserFromLocalStorage } from "./store/userSlice/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserFromLocalStorage());
  }, [dispatch]);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
