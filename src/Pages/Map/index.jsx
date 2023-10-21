import {
    useEffect
} from "react"

import "./stylesheet.scss"
import data from "./mapData.json"
import Section from "./Section"

export default function () {
    useEffect(
        () => {
            document.title = "навигатор / miuruwa"
        }, []
    )

    return <div className="map">
        <h6>
            карта сайта
        </h6>
        {
            data.map(Section)
        }
    </div>
}