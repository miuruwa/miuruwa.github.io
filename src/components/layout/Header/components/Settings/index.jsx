import {
    useToolKit
} from "@shared/toolkit"

import Icon from "@icons/SettingsIcon"
import Сard from "@modal/Settings"
import languagesData from "@shared/languages"

import "./stylesheet.scss"


export default function ({Mobile}) {
    const toolkit = useToolKit()

    const divProps = {
        children: <Icon />,
        className: Mobile ? "header-settings mobile" : "header-settings",
        title: languagesData[toolkit.settings.language].header.settings,
        onClick: () => {
            toolkit.card.show(<Сard />)
        }
    }

    return <div {...divProps} />
}