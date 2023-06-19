import {
    useToolKit
} from "@webx-ui/toolkit"

import "./stylesheet.scss"

import { 
    DesktopTemplate, 
    MobileTemplate 
} from "./templates/"

export default function Repos () {
    const toolkit = useToolKit()

    if (toolkit.app.windowWidth >= 768) {
        return <DesktopTemplate />
    }

    return <MobileTemplate />
}