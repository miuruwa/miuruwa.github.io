import BackgroundImage from "./BackgroundImage"
import Title from "@blocks/Title"
import RishaAndNastya from "../RishaAndNastya"

import "./stylesheet.scss"
import { useIsMobile } from "@hooks/useIsMobile"


const HomepageBanner = () => {
    const isMobile = useIsMobile(768);

    return <div className={isMobile ? "homepage-face mobile" : "homepage-face"}>
        <BackgroundImage />
        <Title />
        <RishaAndNastya />
    </div>
}

export default HomepageBanner;