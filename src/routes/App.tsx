import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCookies } from "react-cookie";

import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/landingpage",
      element: <LandingPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
