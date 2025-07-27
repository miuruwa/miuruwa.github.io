import AboutDev from "@blocks/AboutDev"
import languageData from "@shared/languages"
import { useIsMobile } from "@hooks/useIsMobile"
import { useToolKit } from "@shared/toolkit"
import Links from "@blocks/Links"
import Meta from "@layout/Meta"
import DevArt from "/img/DevArt.png"

import "./stylesheet.scss"

const Dev = () => {
    const toolkit = useToolKit()
    const isMobile = useIsMobile(768);

    return <Meta title={languageData[toolkit.settings.language].about.title}>
        <div className={isMobile ? "links-wrapper" : "links-wrapper desktop"}>
            {
                isMobile ? <>
                    <AboutDev />
                    <img src={DevArt} />
                    <Links />
                </> : <>
                    <div className="links-content">
                        <AboutDev />
                        <Links />
                    </div>
                    <img src={DevArt} />
                </>
            }
        </div>
    </Meta>
}

export default Dev;