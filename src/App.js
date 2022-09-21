import "./App.css";
import { Login } from "./components/Views/Login/Login";
import { Register } from "./components/Views/Register/Register";
import { Error404 } from "./components/Views/404/404";
import { Tasks } from "./components/Views/Tasks/Tasks";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./components/Views/Header/Header";

const App = () => {
  const RequireAuth = ({ children }) => {
    if (!localStorage.getItem("user"))
      return <Navigate to="/login" replace={true} />;
    return children;
  };

  const location = useLocation();

  const pageTransition = {
    in: {
      opacity: 1,
      translateY: "0%"
    },
    out: {
      opacity: 0,
      translateY: "-100%"
    },
  };

  return (
      <>
        <AnimatePresence >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <motion.div
                      className="page"
                      initial="out"
                      animate="in"
                      exit="out"
                      variants={pageTransition}>
                        <Header />
                        <Tasks />
                  </motion.div>
                </RequireAuth>
              }
            />
            <Route path="*" element={<Error404 />} />
            <Route
              path="/login"
              element={
                <motion.div
                  className="page"
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={pageTransition}>
                  <Login />
                </motion.div>
              }
            />
            <Route
              path="/register"
              element={
                <motion.div
                  className="page"
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={pageTransition}>
                  <Register />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </>
  );
};

export default App;
