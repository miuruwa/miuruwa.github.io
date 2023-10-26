import { useEffect } from "react"
import { useToolKit } from "@webx/toolkit"
import { usePages } from "../usePages"

import routes from "../Routes"

import Desktop from "./Desktop"
import Tablet from "./Tablet"
import Mobile from "./Mobile"

import "./stylesheet.scss"


export default function () {
    const toolkit = useToolKit()
    const [page, _] = usePages()

    useEffect(() => {
        const pages = [].concat(...routes)
        const element = pages.find(item => item.repoID == page)

        document.title = `${element.label} / miuruwa`

    }, [page])

    const IS_TABLET = toolkit.settings.windowWidth >= 768
    const IS_DESKTOP = toolkit.settings.windowWidth >= 1024


    if (IS_DESKTOP) {
        return <Desktop />
    }

    if (IS_TABLET) {
        return <Tablet />
    }

    return <Mobile />
}
