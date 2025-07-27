import {
    Navigate
} from "react-router-dom"

import Home from "./Home"
import UnsupportedLanguage from "./UnsupportedLanguage"
import Language from "./Language"
import NotFound from "./NotFound"
import Dev from "./Dev"

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
        path: "/not-found",
        exact: true,
        element: <NotFound />
    },
]