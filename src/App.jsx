import {
    ToolKitContext
} from "@webx/toolkit"

import Footer from "./Footer"
import Header from "./Header"
import Router from "./Router"

import "./scss/stylesheet.scss"


export default function () {
    return <ToolKitContext>
        <Header />
        <Router />
        <Footer />
    </ToolKitContext>
}