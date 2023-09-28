import "./stylesheet.scss"

import useToolkitPartitions from "utils/useToolkitPartitions"

import Main from "./Main"
import Repos from "./Repos"
import NotFound from "./NotFound"
import Settings from "./Settings"

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
            element: <Navigate to="/repos" />
        },
        {
            path: "/cart-calc",
            exact: true,
            element: <Navigate to="/cartify" />
        },
        {
            path: "/*",
            element: <Navigate to="/not-found" />
        },
        {
            path: "/homepage",
            exact: true,
            element: <Main />
        },
        {
            path: "/repos",
            exact: true,
            element: <Repos />
        },
        {
            path: "/settings",
            exact: true,
            element: <Settings />
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
                    props => <Route {...props} />
                )
            }
        </Routes>
    </BrowserRouter>
}

export default Router