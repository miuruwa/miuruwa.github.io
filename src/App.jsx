import {
    ToolKitContext
} from "@webx/toolkit"

import "./theme/stylesheet.scss"

import Header from "./Header"
import Router from "./pages"

function App () {
    return <ToolKitContext>
        <Header />
        <Router/>
    </ToolKitContext>
}

export default App