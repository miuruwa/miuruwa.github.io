import {
    useEffect, createRef, useState
} from "react"

import wait from "../wait"
import titleData from "./titleData.json"

import "./stylesheet.scss"

export default function () {
    const title = createRef()
    const [state, setState] = useState(false)
    const spanClassName = state ? "separator hidden" : "separator"

    async function titleAnimation () {
        const titleContent = title.current

        for (let index = 0; index < titleData.length; index++) {
            const element = titleData[index];

            titleContent.innerHTML = element.title

            if (element.hideSpan) {
                setState(true)
            }
            await wait(element.timeout)
        }

    }

    useEffect(
        () => {
            titleAnimation()
        }, []
    )

    return <div className="homepage-face">
        <div className="homepage-title" >
            <span className={spanClassName}>
                【
            </span>
            <span ref={title} className="homepage-text"></span>
            <span className={spanClassName}>
                】
            </span>
        </div>
    </div>
}