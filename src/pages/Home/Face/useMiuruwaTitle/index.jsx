import {
    createRef, Fragment, useState
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import DevIcon from "@icons/DevIcon"
import wait from "../../wait"
import titleData from "./titleData.json"

import "./stylesheet.scss"


function SpanSpan ({children, className, justifyContent}) {
    const toolkit = useToolKit()

    const props = {
        children: <span children={children}/>,
        className: className,
        style: {
            justifyContent: justifyContent
        }
    }

    if (toolkit.settings.language === "prc") {
        return <Fragment />
    }

    return <span {...props } />
}

export default function () {
    const toolkit = useToolKit()
    const title = createRef()
    const languageTitleData = titleData[toolkit.settings.language]

    const [state, setState] = useState(true);
    const spanClassName = state ? "separator hidden" : "separator"

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
            <SpanSpan className={spanClassName} justifyContent="right">
                【
            </SpanSpan>
            <span ref={title} className="homepage-text">
                {languageTitleData[languageTitleData.length - 1].title}
            </span>
            <SpanSpan className={spanClassName} justifyContent="left">
                】
            </SpanSpan>
        </div>
    ]
}
