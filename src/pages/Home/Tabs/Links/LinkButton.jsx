import {
    Button
} from "@ui"
import { useToolKit } from "@webx/toolkit"
import { Fragment } from "react"


export default function ({ icon, title, link, path, blockAtChina }) {
    const toolkit = useToolKit()

    const buttonProps = {
        icon: icon,
        theme: "transparent",
        title: title[toolkit.settings.language],
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

    return <Button {...buttonProps} />
}