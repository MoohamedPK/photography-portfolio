import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import Contact from "../pages/Contact"
import MainLayout from "../pages/MainLayout"


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        index: true,
        
    },
    // {
    //     path: '/contact',
    //     element: <Contact/>
    // }
])

function AppRoutes() {
  return <RouterProvider router={router}/>
}

export default AppRoutes