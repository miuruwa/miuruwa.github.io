import {
    Navigate
} from "react-router-dom"

import Dev from "./Dev"
import Home from "./Home"
import Map from "./Map"
import NotFound from "./NotFound"


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
        path: "/dev",
        exact: true,
        element: <Dev />
    },
    {
        path: "/not-found",
        exact: true,
        element: <NotFound />
    },
    {
        path: "/map",
        exact: true,
        element: <Map />
    },
]