import {
    useEffect, createRef, useState
} from "react"

import DevIcon from "@webx/icons/DevIcon"
import wait from "../wait"
import titleData from "./titleData.json"


export default function () {
    const title = createRef()

    const [state, setState] = useState(false);
    const spanClassName = state ? "separator hidden" : "separator"
    const logoClassName = state ? "logo-span show" : "logo-span"

    async function titleAnimation() {
        const titleContent = title.current

        for (let index = 0; index < titleData.length; index++) {
            const element = titleData[index]

            titleContent.innerHTML = element.title

            if (element.hideSpan) {
                setState(true)
            }
            await wait(element.timeout)
        }

    }

    useEffect(
        () => {
            titleAnimation();
        }, []
    )

    return <div className="homepage-title">
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
        <span ref={title} className="homepage-text"></span>
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
}
