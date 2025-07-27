import {
    ToolKitContext
} from "@webx/toolkit"

import Footer from "./Footer"
import Header from "./Header"
import Router from "@pages"

import "./scss/stylesheet.scss"

const App = () => {
    return <ToolKitContext>
        <Header />
        <Router />
        <Footer />
    </ToolKitContext>
}

export default App;