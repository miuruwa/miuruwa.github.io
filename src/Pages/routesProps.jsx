import {
    Navigate
} from "react-router-dom"

import Home from "./Home"
import NotFound from "./NotFound"
import Map from "./Map"
import Dev from "./Dev"
import Repos from "./Repos"


export default [
    {
        path: "/",
        exact: true,
        element: <Navigate to="/home" />
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
        path: "/navigate",
        exact: true,
        element: <Navigate to="/map" />
    },
    {
        path: "/navigator",
        exact: true,
        element: <Navigate to="/map" />
    },
    {
        path: "/godmode",
        exact: true,
        element: <Navigate to="/map" />
    },
    {
        path: "/god-mode",
        exact: true,
        element: <Navigate to="/map" />
    },
    {
        path: "/*",
        element: <Navigate to="/not-found" />
    },
    {
        path: "/home",
        exact: true,
        element: <Home />
    },
    {
        path: "/map",
        exact: true,
        element: <Map />
    },
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