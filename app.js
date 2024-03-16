import React, {lazy, Suspense, useEffect} from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Basket from "./Components/Basket"
import RestaurantMenu from "./Components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import ErrorPage from "./Components/ErrorPage"
import About from "./Components/About"
import Shimmer from "./Components/Shimmer"
import useFetchUser from "./utils/useFetchUser"
import credentials from "./utils/credentials"


const AppLayout = () => {
    const [username, setUsername] = useFetchUser()
    console.log("app.js", username)
    if(username===undefined) return
    return (<credentials.Provider value={{username, setUsername}}>
            <div className="app">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
            </credentials.Provider>)
}

const Grocery = lazy(()=>{ return import("./Components/Grocery")});

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
        },
        {
            element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
            path:"/grocery"
        }
        ],
        errorElement:<ErrorPage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)