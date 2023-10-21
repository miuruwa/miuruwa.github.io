import {
    useEffect
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import { 
    DesktopTemplate, 
    MobileTemplate 
} from "./templates"

import "./stylesheet.scss"


export default function () {
    useEffect(
        () => {
            document.title = "проекты / miuruwa"
        }, []
    )

    const toolkit = useToolKit()
    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    return IS_DESKTOP ? <DesktopTemplate /> : <MobileTemplate />
}