import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import languages from "../languages"


export default function () {
    const toolkit = useToolKit()

    const buttonProps = {
        title: languages[toolkit.settings.language].button,
        theme: "white",
        onClick: () => {
            window.location.pathname = "/home"
        }
    }

    return <Button {...buttonProps} />
}