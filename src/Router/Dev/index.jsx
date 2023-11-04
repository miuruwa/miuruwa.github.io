import {
    useEffect
} from "react"

import Description from "./Description"
import Links from "./Links"

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
            <h3>
                {languages[toolkit.settings.language].title}
            </h3>
            <Description />
            <Links />
        </div>
    </>
}