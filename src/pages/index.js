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
    
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/repos/" element={<Repos />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/not-found" element={<NotFound />} />
            <Route exact path="/cart-calc" element={ <Navigate to="/cartify" /> } />
            <Route path="/*" element={ <Navigate to="/not-found" /> } />
        </Routes>
    </BrowserRouter>
}

export default Router