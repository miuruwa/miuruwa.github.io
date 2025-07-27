import {
    useEffect
} from "react"

import Description from "./Description"
import languages from "./Description/languages"
import Links from "./Links"

import "./stylesheet.scss"

import { useToolKit } from "@shared/toolkit"
import DevArt from "./DevArt"
import { useIsMobile } from "hooks/useIsMobile"

const Dev = () => {
    const toolkit = useToolKit()
    const isMobile = useIsMobile(768);

    useEffect(
        () => {
            document.title = `${languages[toolkit.settings.language].title} / miuruwa`
        }, []
    )

    return <div className={isMobile ? "links-wrapper" : "links-wrapper desktop"}>
        {
            isMobile ? <>
                <Description />
                <DevArt />
                <Links />
            </> : <>
                <div className="links-content">
                    <Description />
                    <Links />
                </div>
                <DevArt />
            </>
        }
    </div>
}

export default Dev;