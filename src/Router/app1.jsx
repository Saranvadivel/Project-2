import {  RouterProvider, createBrowserRouter } from "react-router-dom"
import { Firstpage } from "./firstpage"
import { Home } from "./home"
// import { Error } from "./Error"
import { Contact } from "./Contact"

export const App1 = () => {
    const router = createBrowserRouter([{
        path: "/",
        element: <Firstpage />,
        children: [{
            path: "/home",
            element: <Home />
        },
        {
            path: "/contact",
            element: <Contact />
        }
        ],
        // path: "/*",
        // element: <Error />
    }
    ]);
    
    return(<RouterProvider router={router}/>)
    
}