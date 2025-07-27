import {
    ToolKitContext
} from "@shared/toolkit"

import routesConfig from "@shared/routeConfig"
import {
    nanoid
} from "nanoid"


import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"
import Modal from "@ui/modal"

import "./scss/stylesheet.scss"
import "./stylesheet.scss"

const App = () => {
    return <ToolKitContext>
        <BrowserRouter>
            <Routes>
                {
                    routesConfig.map(
                        props => <Route key={nanoid()} {...props} />
                    )
                }
            </Routes>
        </BrowserRouter>
        <Modal />
    </ToolKitContext>
}

export default App;