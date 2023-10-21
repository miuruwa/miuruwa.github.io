import {
    nanoid
} from "nanoid"

import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

import useToolkitPartitions from "~/utils/useToolkitPartitions"
import routesProps from "./routesProps"

import "./stylesheet.scss"


export default function () {
    useToolkitPartitions()

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