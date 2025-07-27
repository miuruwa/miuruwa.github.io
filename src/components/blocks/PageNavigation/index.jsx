import { useToolKit } from "@shared/toolkit";
import SettingsIcon from "@icons/SettingsIcon";
import BackIcon from "@icons/BackIcon";
import { Button } from "@ui";
import languageData from "@shared/languages";
import { useNavigate } from "react-router-dom";

import styles from "./PageNavigation.module.scss";
import Settings from "@blocks/Settings";

const PageNavigation = () => {
    const {
        root 
    } = styles

    const toolkit = useToolKit();
    const navigate = useNavigate();
    const pageData = languageData[toolkit.settings.language].pageNavigation

    return <div className={root}>
        <Button 
            icon={<BackIcon />}
            title={pageData.home}
            theme="transparent"
            onClick={() => navigate("/home")}
        />
        <Button 
            icon={<SettingsIcon />}
            theme="transparent"
            onClick={() => toolkit.card.show(<Settings />)}
        />
    </div>
}

export default PageNavigation;