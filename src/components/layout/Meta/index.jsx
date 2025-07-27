import {
    useToolKit
} from "@shared/toolkit"

import { useEffect } from "react"

const Meta = ({children, title}) => {
    const toolkit = useToolKit()

    if (toolkit.settings.language === "unset" & window.location.pathname !== "/language") {
        window.localStorage.setItem("get-cache", window.location.href)
        window.location.pathname = "/language"
    }

    useEffect(
        () => {
            document.title = `${title} / miuruwa`
        }, []
    )

    return children
}

export default Meta;
