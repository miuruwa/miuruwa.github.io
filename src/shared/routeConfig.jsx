import { lazy } from "react"
import { Navigate } from "react-router-dom"

const LazyAbout = lazy(() => import("@pages/About"))
const LazyDetails = lazy(() => import("@pages/Details"))
const LazyHome = lazy(() => import("@pages/Home"))
import NotFound from "@pages/NotFound"
const LazySubmitCommission = lazy(() => import("@pages/SubmitCommission"))
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
		path: "/about",
		exact: true,
		element: <LazyAbout />
	},
	{
		path: "/details",
		exact: true,
		element: <LazyDetails />
	},
	{
		path: "/home",
		exact: true,
		element: <LazyHome />
	},
	{
		path: "/submit-commission",
		exact: true,
		element: <LazySubmitCommission />
	},
	{
		path: "/terms-of-service",
		exact: true,
		element: <LazyTermsOfService />
	},
]

export default routeConfig;
