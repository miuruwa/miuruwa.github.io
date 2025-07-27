import {
    useToolKit
} from "@webx/toolkit"

import Icon from "@webx/icons/SettingsIcon"
import Сard from "@modal/Settings"
import languages from "./languages"

import "./stylesheet.scss"


export default function ({Mobile}) {
    const toolkit = useToolKit()

    const divProps = {
        children: <Icon />,
        className: Mobile ? "header-settings mobile" : "header-settings",
        title: languages[toolkit.settings.language],
        onClick: () => {
            toolkit.card.show(<Сard />)
        }
    }

    return <div {...divProps} />
}