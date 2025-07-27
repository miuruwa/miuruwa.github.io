import {
    createRef, useEffect
} from "react"

import {
    useToolKit
} from "@shared/toolkit"

import wait from "@utils/wait"
import languageData from "@shared/languages"

import "./stylesheet.scss"

const Title = () => {
    const toolkit = useToolKit()
    const title = createRef()
    const blockData = languageData[toolkit.settings.language].homePageTitle

    async function titleAnimation() {
        const titleContent = title.current
        const element = blockData[0]
        titleContent.innerHTML = element.title

        for (let index = 0; index < blockData.length; index++) {
            const element = blockData[index]

            titleContent.innerHTML = element.title

            await wait(element.timeout)
        }

    }

    useEffect(() => {
        titleAnimation()
    }, [])

    return <div className="homepage-title">
        <span ref={title} className="homepage-text">
            {blockData[blockData.length - 1].title}
        </span>
    </div>
}

export default Title;