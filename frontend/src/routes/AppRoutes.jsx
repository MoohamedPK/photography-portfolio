import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import Contact from "../pages/Contact"
import MainLayout from "../pages/MainLayout"
import ProjectDetails from "../components/ProjectDetails";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    
    children: [
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },

      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function AppRoutes() {
  return <RouterProvider router={router}/>
}

export default AppRoutes