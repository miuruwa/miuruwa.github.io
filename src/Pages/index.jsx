import {
    nanoid
} from "nanoid"

import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

import routesProps from "./routesProps"

import "./stylesheet.scss"


export default function () {
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