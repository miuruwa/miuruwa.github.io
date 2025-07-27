import {
    ToolKitContext
} from "@webx/toolkit"

import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
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