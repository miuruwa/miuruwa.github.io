import {
    useToolKit
} from "@webx/toolkit"

import SettingsIcon from "@webx/icons/SettingsIcon"
import SettingsСard from "../../components/Settings"


function OpenSettings() {
    const toolkit = useToolKit()
    
    function onClick() {
        toolkit.card.show(<SettingsСard />)
    }

    return <div 
      className="header-button second" title="Настройки"
      onClick={onClick}
    >
        <SettingsIcon />
    </div>
}

export default OpenSettings