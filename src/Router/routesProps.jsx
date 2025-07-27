import {
    Navigate
} from "react-router-dom"

import { lazy } from "react"

import NotFound from "@pages/NotFound"

const LazyHome = lazy(() => import("@pages/Home"))
const LazyUnsupportedLanguage = lazy(() => import("@pages/UnsupportedLanguage"))
const LazyLanguage = lazy(() => import("@pages/Language"))
const LazyDev = lazy(() => import("@pages/Dev"))

export const routeConfig = [
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
        element: <NotFound />
    },
    {
        path: "/home",
        exact: true,
        element: <LazyHome />
    },
    {
        path: "/language",
        exact: true,
        element: <LazyLanguage />
    },
    {
        path: "/unsupported",
        exact: true,
        element: <LazyUnsupportedLanguage />
    },
    {
        path: "/dev",
        exact: true,
        element: <LazyDev />
    },
]

export default routeConfig;
