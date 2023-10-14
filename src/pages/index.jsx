import "./stylesheet.scss"

import useToolkitPartitions from "~/utils/useToolkitPartitions"

import About from "./About"
import Repos from "./Repos"
import NotFound from "./NotFound"

import {
    nanoid
} from "nanoid"

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
            element: <Navigate to="/repos" />
            // element: <Main />
        },
        {
            path: "/about",
            exact: true,
            element: <About />
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
    
    return <BrowserRouter>
        <Routes>
            {
                routesProps.map(
                    props => <Route key={nanoid()} {...props} />
                )
            }
        </Routes>
    </BrowserRouter>
}

export default Router