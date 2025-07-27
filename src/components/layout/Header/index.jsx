import {
    useToolKit
} from "@shared/toolkit"

import Desktop from "./Layout/Desktop"
import Mobile from "./Layout/Mobile"

import "./stylesheet.scss"
import Home from "./components/Home"
import Navigation from "./Navigation"
import Settings from "./components/Settings"

export default function () {
    return <div className="header">
        <div className="header-frame">
            <Home Mobile/>
            <Navigation isCard/>
            <Settings Mobile/>
        </div>
    </div>
}
export default function () {
    const toolkit = useToolKit()

    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    if (toolkit.settings.language === "unset") {
        return <></>
    }

    return IS_DESKTOP ? <Desktop /> : <Mobile />
}