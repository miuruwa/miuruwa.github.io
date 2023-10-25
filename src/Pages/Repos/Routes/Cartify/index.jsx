import Headline from "./Headline"
import Description from "./Description"
import Links from "./Links"
import Features from "./Features"

import "./stylesheet.scss"


export default function () {
    return <div className="cartify">
        <Headline />
        <Description />
        <Features />
        <Links />
    </div>
}