import AboutDev from "@blocks/AboutDev"
import languageData from "@shared/languages"
import { useIsMobile } from "@hooks/useIsMobile"
import { useToolKit } from "@shared/toolkit"
import Links from "@blocks/Links"
import Meta from "@layout/Meta"
import DevArt from "/img/DevArt.png"
import styles from "./Dev.module.scss";
import { useNavigate } from "react-router-dom"
import PageNavigation from "@blocks/PageNavigation"

const Dev = () => {
    const {
        root, devContent, infoBlock
    } = styles;
    const toolkit = useToolKit()
    const isMobile = useIsMobile(768);

    const pageData = languageData[toolkit.settings.language].about

    return <Meta title={pageData.title}>
        <div className={root}>
            {
                isMobile ? <div className={infoBlock}>
                    <PageNavigation />
                    <AboutDev />
                    <img src={DevArt} />
                    <Links />
                </div> : <div className={devContent}>
                    <img src={DevArt} />
                    <div className={infoBlock}>
                        <PageNavigation />
                        <AboutDev />
                        <Links />
                    </div>
                </div>
            }
        </div>
    </Meta>
}

export default Dev;