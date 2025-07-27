import {
    useToolKit
} from "@shared/toolkit"

import Icon from "@icons/HeaderLogoIcon"

import "./stylesheet.scss"

import languagesData from "@shared/languages"


export default function ({Mobile}) {
    const toolkit = useToolKit()

    const divProps = {
        children: <Icon />,
        className: Mobile ? "header-home mobile" : "header-home",
        title: languagesData[toolkit.settings.language].header.home,
        onClick: () => {
            window.location.pathname = "/home"
        }
    }

    return <div {...divProps} />
}