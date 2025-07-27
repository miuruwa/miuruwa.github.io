import { Fragment } from "react"

import { 
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@ui"


export default function ({ selectedLanguage }) {
    const toolkit = useToolKit()

    const props = {
        theme: "transparent",
        title: selectedLanguage.title,
        onClick: () => {
            toolkit.settings.language = selectedLanguage.name
        }
    }

    if (selectedLanguage.hidden) {
        return <Fragment />
    }

    return <Button {...props} />
}
