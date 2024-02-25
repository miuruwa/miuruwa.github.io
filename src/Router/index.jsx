import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import {
    BrowserRouter, 
    Route,
    Routes
} from "react-router-dom"

import routesProps from "./routesProps"
// import OfflineExploit from "~/utils/OfflineExploit"
import "./stylesheet.scss"

export default function () {
    const toolkit = useToolKit()

    /* switch(OfflineExploit()) {
        case 1:
            if (window.location.pathname !== "/important-thing" && toolkit.settings.language !== "unset") {
                if (["/home", "/dev"].includes(window.location.pathname)) {
                    window.location.pathname = "/important-thing"
                }
            }
    } */

    if (toolkit.settings.language === "unset" & window.location.pathname !== "/language") {
        window.localStorage.setItem("get-cache", window.location.href)
        window.location.pathname = "/language"
    }

    return <BrowserRouter>
        <Routes>
            {
                routesProps.map(
                    props => <Route key={nanoid()} {...props} />
                )
            }
        </Routes>
    </BrowserRouter>
}