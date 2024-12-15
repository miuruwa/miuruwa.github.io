import {
    CardBlock
} from "@webx/forms"
import { useToolKit } from "@webx/toolkit"
import { Fragment } from "react"


export default function ({ icon, title, link, path, blockAtChina }) {
    const toolkit = useToolKit()

    const buttonProps = {
        children: <CardBlock>
            {icon}
            <h2 children={title[toolkit.settings.language]} />
        </CardBlock>,
        className: "homepage-panel",
        onClick: () => {
            if (link) {
                window.location.href = link
                return
            }
            window.location.pathname = path
        }
    }

    if (blockAtChina && toolkit.settings.language === "prc") {
        return <Fragment />
    }

    return <div {...buttonProps} />
}