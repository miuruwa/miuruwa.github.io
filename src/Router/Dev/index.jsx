import {
    useEffect
} from "react"

import Description from "./Description"
import LinksTab from "./LinksTab"

import "./stylesheet.scss"


export default function () {
    useEffect(
        () => {
            document.title = "о разработчике / miuruwa"
        }, []
    )
    return <>
        <div className="links-wrapper">
            <Description />
            <LinksTab />
        </div>
    </>
}