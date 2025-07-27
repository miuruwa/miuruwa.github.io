import {
    ToolKitContext
} from "@shared/toolkit"

import Footer from "@layout/Footer"
import Header from "@layout/Header"
import routesConfig from "@shared/routeConfig"
import {
    nanoid
} from "nanoid"


import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

import "./scss/stylesheet.scss"
import "./stylesheet.scss"

const App = () => {
    return <ToolKitContext>
        <Header />
        <BrowserRouter>
            <Routes>
                {
                    routesConfig.map(
                        props => <Route key={nanoid()} {...props} />
                    )
                }
            </Routes>
        </BrowserRouter>
        <Footer />
    </ToolKitContext>
}

export default App;