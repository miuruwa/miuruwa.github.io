import {
    ToolKitContext
} from "@webx/toolkit"

import Header from "./Header"
import Router from "./Pages"

import "./scss/stylesheet.scss"

export default function () {
    return <ToolKitContext>
        <Header />
        <Router />
    </ToolKitContext>
}