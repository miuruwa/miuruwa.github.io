import {
    useToolKit
} from "@shared/toolkit"

import Icon from "@icons/MenuIcon"
import "./stylesheet.scss"
import languages from "./languages"


export default function ({onClick}) {
    const toolkit = useToolKit()

    const divProps = {
        className: "header-navigation-button",
        title: languages[toolkit.settings.language],
        children: <Icon />,
        onClick: onClick
    }

    return <div {...divProps} />
}