import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useCookies } from "react-cookie";

import LandingPage from "../pages/LandingPage";
import MenteeList from "../pages/MenteeList";
import EditMente from "../pages/EditMente";
import EditClass from "../pages/EditClass";
import MenteeLog from "../pages/MenteeLog";
import Dashboard from "../pages/Dashboard";
import AddNewLog from "../pages/AddNewLog";
import AddMente from "../pages/AddMente";
import EditUser from "../pages/EditUser";
import UserList from "../pages/UserList";
import AddClass from "../pages/AddClass";
import AddUser from "../pages/AddUser";
import Class from "../pages/Class";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/mente" element={<MenteeList />} />
        <Route path="/class" element={<Class />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addmente" element={<AddMente />} />
        <Route path="/addclass" element={<AddClass />} />
        <Route path="/edituser/:user_id" element={<EditUser />} />
        <Route path="/mente/:mente_id" element={<MenteeLog />} />
        <Route path="/editclass/:class_id" element={<EditClass />} />
        <Route path="/editmente/:mente_id" element={<EditMente />} />
        <Route path="/addfeedback/:mente_id" element={<AddNewLog />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
