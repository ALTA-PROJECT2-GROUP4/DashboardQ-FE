import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useCookies } from "react-cookie";

import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import UserList from "../pages/UserList";
import MenteeList from "../pages/MenteeList";
import Class from "../pages/Class";
import AddUser from "../pages/AddUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/mentee" element={<MenteeList />} />
        <Route path="/class" element={<Class />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
