import {
    useEffect
} from "react"

import Description from "./Description"
import languages from "./Description/languages"
import Links from "./Links"

import "./stylesheet.scss"

import { useToolKit } from "@webx/toolkit"
import DevArt from "./DevArt"


function Mobile () {
    return <div className="links-wrapper">
        <Description />
        <DevArt />
        <Links />
    </div>
}

function Desktop () {
    return <div className="links-wrapper desktop">
        <div className="links-content">
            <Description />
            <Links />
        </div>
        <DevArt />
    </div>
}

export default function () {
    const toolkit = useToolKit()

    useEffect(
        () => {
            document.title = `${languages[toolkit.settings.language].title} / miuruwa`
        }, []
    )
    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    return IS_DESKTOP ? <Desktop /> : <Mobile />
}