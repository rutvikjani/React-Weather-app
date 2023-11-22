import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import MainPage from "./Components/MainPage";
import { AuthProvider } from "./Components/auth";
import { RequireAuth } from "./Components/requireAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path="/sign-up" element={<RegisterPage />}></Route>
          <Route exact path="/" element={<LoginPage />}></Route>
          <Route
            exact
            path="/home-page"
            element={
              <RequireAuth>
                <MainPage />
              </RequireAuth>
            }
          ></Route>
          <Route path="*" element={<h1>404, Page Not Found</h1>}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
