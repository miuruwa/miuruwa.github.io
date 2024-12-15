

import "./stylesheet.scss"
import Start from "./Start"
import Panels from "./Panels"
import Links from "./Links"


export default function () {
    return <div className="homepage-content">
        <Start />
        <Panels />
        <Links />
    </div>
}