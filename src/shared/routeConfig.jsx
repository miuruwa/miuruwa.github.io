import { lazy } from "react"
import { Navigate } from "react-router-dom"

import NotFound from "@pages/NotFound"
const LazyHome = lazy(() => import("@pages/Home"))
const LazyAbout = lazy(() => import("@pages/About"))
const LazyTermsOfService = lazy(() => import("@pages/TermsOfService"))

export const routeConfig = [
	{
		path: "/",
		exact: true,
		element: <Navigate to="/home" />
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
		path: "/about",
		exact: true,
		element: <LazyAbout />
	},
	{
		path: "/terms-of-service",
		exact: true,
		element: <LazyTermsOfService />
	},
]

export default routeConfig;
