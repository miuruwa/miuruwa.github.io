import { lazy, useEffect } from "react"

const LazyAbout = lazy(() => import("@pages/About"));
const LazyDetails = lazy(() => import("@pages/Details"));
const LazyHome = lazy(() => import("@pages/Home"));
import NotFound from "@pages/NotFound";
const LazyTermsOfService = lazy(() => import("@pages/TermsOfService"));
const LazyStartup = lazy(() => import("@pages/Startup"));
const LazySettings = lazy(() => import("@pages/Settings"));
const LazyRequest = lazy(() => import("@pages/Request"));
const LazyRedirect = lazy(() => import("@layout/Redirect"));

import { routes } from "./routes";

export const routeConfig = [
	{
		path: routes.startUp,
		exact: true,
		element: <LazyStartup />
	},
	{
		path: "*",
		element: <NotFound />
	},
	{
		path: routes.waitList,
		exact: true,
		element: <LazyRedirect url={routes.waitListURL} />,
	},
	{
		path: routes.aboutMe,
		exact: true,
		element: <LazyAbout />
	},
	{
		path: routes.commissionInfo,
		exact: true,
		element: <LazyDetails />
	},
	{
		path: routes.home,
		exact: true,
		element: <LazyHome />
	},
	{
		path: routes.tos,
		exact: true,
		element: <LazyTermsOfService />
	},
	{
		path: routes.settings,
		exact: true,
		element: <LazySettings />
	},
	{
		path: routes.request,
		exact: true,
		element: <LazyRequest />
	},
]

export default routeConfig;
