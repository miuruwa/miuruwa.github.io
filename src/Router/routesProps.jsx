import {
    Navigate
} from "react-router-dom"

import Home from "./Home"
import UnsupportedLanguage from "./UnsupportedLanguage"
import Language from "./Language"
import NotFound from "./NotFound"
import Map from "./Map"
import Dev from "./Dev"
import Repos from "./Repos"
import TemporaryUnavailable from "./TemporaryUnavailable"


function External ({to}) {
    window.location.href = to
    return null
}

export default [
    {
        path: "/",
        exact: true,
        element: <Navigate to="/home" />
    },
    {
        path: "/about",
        exact: true,
        element: <Navigate to="/dev" />
    },
    {
        path: "/navigation",
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
        path: "/language",
        exact: true,
        element: <Language />
    },
    {
        path: "/unsupported",
        exact: true,
        element: <UnsupportedLanguage />
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
    {
        path: "/important-thing",
        exact: true,
        element: <TemporaryUnavailable />
    },
]