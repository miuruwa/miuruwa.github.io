import {
    useToolKit
} from "@webx/toolkit"

import "./stylesheet.scss"

import { 
    DesktopTemplate, 
    MobileTemplate 
} from "./templates/"

function Repos () {
    const toolkit = useToolKit()

    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    if (IS_DESKTOP) {
        return <DesktopTemplate />
    }

    return <MobileTemplate />
}

export default Repos