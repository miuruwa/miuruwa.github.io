import BackgroundImage from "./BackgroundImage"
import Content from "./Content"
import DevArt from "./DevArt"

import "./stylesheet.scss"
import { useIsMobile } from "hooks/useIsMobile"


export default function () {
    const isMobile = useIsMobile(768);

    return <div className={isMobile ? "homepage-face mobile" : "homepage-face"}>
        <BackgroundImage />
        <Content />
        <DevArt />
    </div>
}