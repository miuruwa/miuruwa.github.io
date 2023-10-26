
import Headline from "./Headline"
import Links from "./Links"
import Functional from "./Functional"
import Description from "./Description"

import "./stylesheet.scss"


export default function () {
    return <div className="marcelbot">
        <Headline />
        <Description />
        <Functional />
        <Links />
    </div>
}