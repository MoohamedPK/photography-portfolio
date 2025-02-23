import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        index: true,
        
    },
    {
        path: '/contact',
        element: <Contact/>
    }
])

function AppRoutes() {
  return <RouterProvider router={router}/>
}

export default AppRoutes