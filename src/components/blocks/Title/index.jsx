import {
    createRef, useEffect
} from "react"

import {
    useToolKit
} from "@shared/toolkit"

import wait from "@utils/wait"
import languageData from "@shared/languages"

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

    return <h1 ref={title}></h1>
}

export default Title;