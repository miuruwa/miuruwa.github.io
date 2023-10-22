import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import LinkButton from "./LinkButton"
import linksData from "./linksData"

import "./stylesheet.scss"


function Start () {
    const toolkit = useToolKit()

    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    return IS_DESKTOP ? <></> : <h6>
        Домашняя страница
    </h6>
}

function Links () {
    return <>
        <div className="homepage-links">
            {
                linksData.map(
                    item => <LinkButton key={nanoid()} {...item} />
                )
            }
        </div>
    </>
}

export default function () {
    return <div className="homepage-content">
        <Start />
        <Links />
    </div>
}