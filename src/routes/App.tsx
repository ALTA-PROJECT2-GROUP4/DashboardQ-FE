import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useCookies } from "react-cookie";

import LandingPage from "../pages/LandingPage";
import MenteeList from "../pages/MenteeList";
import EditMente from "../pages/EditMente";
import Dashboard from "../pages/Dashboard";
import AddMente from "../pages/AddMente";
import EditUser from "../pages/EditUser";
import UserList from "../pages/UserList";
import MenteeLog from "../pages/MenteeLog";
import AddClass from "../pages/AddClass";
import AddUser from "../pages/AddUser";
import Class from "../pages/Class";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/mente" element={<MenteeList />} />
        <Route path="/class" element={<Class />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addmente" element={<AddMente />} />
        <Route path="/addclass" element={<AddClass />} />
        <Route path="/edituser/:user_id" element={<EditUser />} />
        <Route path="/mente/:mente_id" element={<MenteeLog />} />
        <Route path="/editmente/:mente_id" element={<EditMente />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
