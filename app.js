import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Basket from "./Components/Basket"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

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
        }]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)