import {
    createRef, useState
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import DevIcon from "@webx/icons/DevIcon"
import wait from "../../wait"
import titleData from "./titleData.json"

import "./stylesheet.scss"


export default function () {
    const toolkit = useToolKit()
    const title = createRef()
    const languageTitleData = titleData[toolkit.settings.language]

    const [state, setState] = useState(true);
    const spanClassName = state ? "separator hidden" : "separator"
    const logoClassName = state ? "logo-span show" : "logo-span"

    async function titleAnimation() {
        const titleContent = title.current
        const element = languageTitleData[0]
        titleContent.innerHTML = element.title

        setState(false)

        for (let index = 0; index < languageTitleData.length; index++) {
            const element = languageTitleData[index]

            titleContent.innerHTML = element.title

            if (element.hideSpan) {
                setState(true)
            }
            await wait(element.timeout)
        }

    }

    return [
        titleAnimation,
        <div className="homepage-title">
            <span className={logoClassName}>
                <DevIcon />
            </span>
            <span className={spanClassName} style={
                {
                    justifyContent: "right"
                }
            }>
                <span>
                    【
                </span>
            </span>
            <span ref={title} className="homepage-text">
                {languageTitleData[languageTitleData.length - 1].title}
            </span>
            <span className={spanClassName} style={
                {
                    justifyContent: "left"
                }
            }>
                <span>
                    】
                </span>
            </span>
        </div>
    ]
}
