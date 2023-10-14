import {
    ToolKitContext
} from "@webx/toolkit"

import Header from "./Header"
import Router from "./Pages"

import "./scss/stylesheet.scss"

function App () {
    return <ToolKitContext>
        <Header />
        <Router />
    </ToolKitContext>
}

export default App