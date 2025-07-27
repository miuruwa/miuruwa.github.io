import {
    ToolKitContext
} from "@shared/toolkit"

import Footer from "@layout/Footer"
import Header from "@layout/Header"
import Router from "@pages/router"

import "./scss/stylesheet.scss"

const App = () => {
    return <ToolKitContext>
        <Header />
        <Router />
        <Footer />
    </ToolKitContext>
}

export default App;