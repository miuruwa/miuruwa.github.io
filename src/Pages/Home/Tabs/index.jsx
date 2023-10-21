import LinkButton from "./LinkButton"
import linksData from "./linksData"

import "./stylesheet.scss"


function Start () {
    return <>
        <h6>
            Домашняя страница
        </h6>
    </>
}

function Links () {
    return <>
        <div className="homepage-links">
            {
                linksData.map(LinkButton)
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