import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import MainLayout from "./Layout/MainLayout"
import AboutUs from "./pages/AboutUs"
import Blog from "./pages/Blog"
import BlogDetails from "./pages/BlogDetails"



const router = createBrowserRouter([
  {
    path: "", element: <MainLayout />, children: [
      { index: true, element: <Home /> },
      { path: 'aboutus', element: <AboutUs /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogDetails/> },
    ]
  }
])

export default function App() {
  return <>
  
  <RouterProvider router={router}></RouterProvider>
  </>
}


