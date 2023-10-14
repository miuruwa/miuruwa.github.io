import {
    ToolKitContext
} from "@webx/toolkit"

import Header from "./Header"

import "./scss/stylesheet.scss"

function App () {
    return <ToolKitContext>
        <Header />
    </ToolKitContext>
}

export default App