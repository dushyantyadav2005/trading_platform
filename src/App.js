import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/login/login';
import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies(["token"]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={ <HomePage /> }
        />
        <Route
          path="/login"
          element={!cookies.token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!cookies.token ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;