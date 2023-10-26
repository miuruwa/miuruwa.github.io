import Content from "./Content"
import DevArt from "./DevArt"

import "./stylesheet.scss"


export default function () {
    return <div className="homepage-face">
        <Content />
        <DevArt />
    </div>
}