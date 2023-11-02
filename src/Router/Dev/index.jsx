import {
    useEffect
} from "react"

import Description from "./Description"
import LinksTab from "./LinksTab"

import "./stylesheet.scss"

import languages from "./languages"
import { useToolKit } from "@webx/toolkit"


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
            <LinksTab />
        </div>
    </>
}