import {
    useEffect, createRef
} from "react"

import wait from "../wait"
import titleData from "./titleData.json"

import "./stylesheet.scss"

function Component () {
    const title = createRef();

    async function titleAnimation () {
        const titleContent = title.current

        for (let index = 0; index < titleData.length; index++) {
            const element = titleData[index];

            titleContent.innerHTML = element.title
            await wait(element.timeout)
        }
    }

    useEffect(
        () => {
            titleAnimation()
        }, []
    )

    return <div className="homepage-face">
        <div className="homepage-title" ref={title}></div>
    </div>
}

export default Component