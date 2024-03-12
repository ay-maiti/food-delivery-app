import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Basket from "./Components/Basket"
import RestaurantMenu from "./Components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import ErrorPage from "./Components/ErrorPage"
import About from "./Components/About"

const AppLayout = () => {
    return <div className="app">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
}

const appRouter = createBrowserRouter([
    {
        element:<AppLayout/>,
        children:[{
            element:<Body/>,
            path:"/"
        },
        {
            element:<Basket/>,
            path:"/basket"
        },
        {
            element:<RestaurantMenu/>,
            path:"/restaurant/:resId",
            errorElement:<ErrorPage/>
        },
        {
            element:<About/>,
            path:"/about"
        }
        ],
        errorElement:<ErrorPage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)