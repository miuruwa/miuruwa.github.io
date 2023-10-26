import Headline from "./Headline"
import Description from "./Description"
import Links from "./Links"
import Warn from "./Warn"

import "./stylesheet.scss"


export default function () {
    return <div className="webx-repo">
        <Warn />
        <Headline />
        <Description />
        <Links />
    </div>
}


