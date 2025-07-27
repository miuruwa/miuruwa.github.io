import { useToolKit } from "@webx/toolkit"
import BackgroundImage from "./BackgroundImage"
import Content from "./Content"
import DevArt from "./DevArt"

import "./stylesheet.scss"


export default function () {
    const toolkit = useToolKit()
    const IS_DESKTOP = toolkit.settings.windowWidth > 768

    const props = {
        className: IS_DESKTOP ? "homepage-face": "homepage-face mobile",
        children: <>
            <BackgroundImage />
            <Content />
            <DevArt />
        </>
    }

    return <div {...props} />
}