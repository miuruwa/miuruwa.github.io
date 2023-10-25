import Headline from "./Headline"
import Description from "./Description"
import Links from "./Links"

import "./stylesheet.scss"


export default function () {
    return <div className="notify">
        <Headline />
        <Description />
        <Links />
    </div>
}
