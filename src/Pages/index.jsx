import "./stylesheet.scss"

import useToolkitPartitions from "~/utils/useToolkitPartitions"

import Dev from "./Dev"
import Home from "./Home"
import Start from "./Start"
import Repos from "./Repos"
import NotFound from "./NotFound"

import {
    nanoid
} from "nanoid"

import {
    BrowserRouter, 
    Route,
    Routes,
    Navigate 
} from "react-router-dom"

function Router () {
    useToolkitPartitions()

    const routesProps = [
        {
            path: "/",
            exact: true,
            element: <Start />
        },
        {
            path: "/cart-calc",
            exact: true,
            element: <Navigate to="/cartify" />
        },
        {
            path: "/about",
            exact: true,
            element: <Navigate to="/dev" />
        },
        {
            path: "/*",
            element: <Navigate to="/not-found" />
        },
        // {
        //     path: "/home",
        //     exact: true,
        //     element: <Home />
        // },
        {
            path: "/dev",
            exact: true,
            element: <Dev />
        },
        {
            path: "/repos",
            exact: true,
            element: <Repos />
        },
        {
            path: "/not-found",
            exact: true,
            element: <NotFound />
        },
    ]
    
    return <BrowserRouter>
        <Routes>
            {
                routesProps.map(
                    props => <Route key={nanoid()} {...props} />
                )
            }
        </Routes>
    </BrowserRouter>
}

export default Router