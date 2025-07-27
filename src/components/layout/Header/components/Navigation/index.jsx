import {
    useToolKit
} from "@shared/toolkit"

import Icon from "@icons/MenuIcon"
import "./stylesheet.scss"
import languagesData from "@shared/languages"


export default function ({onClick}) {
    const toolkit = useToolKit()

    const divProps = {
        className: "header-navigation-button",
        title: languagesData[toolkit.settings.language].header.navigation,
        children: <Icon />,
        onClick: onClick
    }

    return <div {...divProps} />
}