import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import AppContainer from "./components/layout/AppContainer";
import Home from "./pages/Home";
import Page from "./pages/Page";
import NotFound from "./pages/NotFound";

function App() {
  const userRedux = useSelector((state) => state.user);
  const [user, setUser] = useState(userRedux);
  console.log(user);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AppContainer />}>
        <Route path="home" element={<Home />} />
        <Route path="page" element={<Page />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
