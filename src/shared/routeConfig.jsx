import { lazy } from "react"

const LazyAbout = lazy(() => import("@pages/About"));
const LazyDetails = lazy(() => import("@pages/Details"));
const LazyHome = lazy(() => import("@pages/Home"));
import NotFound from "@pages/NotFound";
const LazySubmitCommission = lazy(() => import("@pages/SubmitCommission"));
const LazyTermsOfService = lazy(() => import("@pages/TermsOfService"));
const LazyStartup = lazy(() => import("@pages/Startup"));
const LazySettings = lazy(() => import("@pages/Settings"));
const LazyBasePrice = lazy(() => import("@pages/BasePrice"));

export const routeConfig = [
	{
		path: "/",
		exact: true,
		element: <LazyStartup />
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
	{
		path: "/settings",
		exact: true,
		element: <LazySettings />
	},
	{
		path: "/base-price",
		exact: true,
		element: <LazyBasePrice />
	},
]

export default routeConfig;
