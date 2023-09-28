import {
    ToolKitContext
} from "@webx/toolkit"

import "theme/stylesheet.scss"

import Router from "pages"

export default function App () {
    return <ToolKitContext>
        <Router/>
    </ToolKitContext>
}