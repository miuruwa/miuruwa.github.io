import {
    useEffect
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import "./stylesheet.scss"
import data from "./mapData.json"
import Section from "./Section"


export default function () {
    const toolkit = useToolKit()

    useEffect(
        () => {
            document.title = `${data.title[toolkit.settings.language]} / miuruwa`
        }, []
    )

    return <div className="map">
        <h6>
        {data.title[toolkit.settings.language]}
        </h6>
        {
            data.array.map(Section)
        }
    </div>
}