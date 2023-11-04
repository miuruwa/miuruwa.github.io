import {
    useEffect
} from "react"

import Description from "./Description"
import languages from "./Description/languages"
import Links from "./Links"

import "./stylesheet.scss"

import { useToolKit } from "@webx/toolkit"
import DevArt from "./DevArt"


export default function () {
    const toolkit = useToolKit()

    useEffect(
        () => {
            document.title = `${languages[toolkit.settings.language].title} / miuruwa`
        }, []
    )
    return <>
        <div className="links-wrapper">
            <Description />
            <DevArt />
            <Links />
        </div>
    </>
}