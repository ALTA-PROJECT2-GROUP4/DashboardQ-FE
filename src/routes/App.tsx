import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useCookies } from "react-cookie";

import LandingPage from "../pages/LandingPage";
import MenteeList from "../pages/MenteeList";
import Dashboard from "../pages/Dashboard";
import AddMente from "../pages/AddMente";
import EditUser from "../pages/EditUser";
import UserList from "../pages/UserList";
import AddUser from "../pages/AddUser";
import Class from "../pages/Class";

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
        <Route path="/edituser/:user_id" element={<EditUser />} />
        <Route path="/addmente" element={<AddMente />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
