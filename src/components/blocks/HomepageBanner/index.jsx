import BackgroundImage from "@blocks/BackgroundImage"
import Title from "@blocks/Title"
import RishaAndNastya from "../RishaAndNastya"

import { useIsMobile } from "@hooks/useIsMobile"
import styles from "./HomepageBanner.module.scss"
import { useNavigate } from "react-router-dom"
import { Button } from "@ui"

const HomepageBanner = () => {
    const {root, data, desktopPage} = styles;
    const isMobile = useIsMobile(768);
    const navigate = useNavigate();

    return <div className={root}>
        <BackgroundImage />
        { isMobile ? <div className={data}>
            <Title />
            <RishaAndNastya />
            <Button
                title="about"
                theme="transparent"
                onClick={() => navigate("/dev")}
            />
        </div> : <div className={desktopPage}>
            <div className={data}>
                <Title />
                <Button
                    title="about"
                    theme="transparent"
                    onClick={() => navigate("/dev")}
                />
            </div>
            <RishaAndNastya />
        </div>
        }
    </div>
}

export default HomepageBanner;