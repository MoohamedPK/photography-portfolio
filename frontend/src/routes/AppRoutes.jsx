import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import Contact from "../pages/Contact"
import MainLayout from "../pages/MainLayout"
import ProjectDetails from "../components/ProjectDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        index: true
    },
    {
        path: '/project/:id',
        element: <ProjectDetails/>
    }
])

function AppRoutes() {
  return <RouterProvider router={router}/>
}

export default AppRoutes