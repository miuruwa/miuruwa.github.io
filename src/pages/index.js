import "./stylesheet.scss"

import useToolkitPartitions from "utils/useToolkitPartitions"

import Repos from "./Repos"
import NotFound from "./NotFound"
import Settings from "./Settings"

import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

function Router () {
    useToolkitPartitions()
    
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Repos />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}

export default Router