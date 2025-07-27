import {
    useToolKit
} from "@webx/toolkit"

import Icon from "@icons/HeaderLogoIcon"

import "./stylesheet.scss"

import languages from "./languages"


export default function ({Mobile}) {
    const toolkit = useToolKit()

    const divProps = {
        children: <Icon />,
        className: Mobile ? "header-home mobile" : "header-home",
        title: languages[toolkit.settings.language],
        onClick: () => {
            window.location.pathname = "/home"
        }
    }

    return <div {...divProps} />
}