import {
    useToolKit
} from "@webx/toolkit"

import { 
    Button
} from "@webx/forms"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    const buttonProps = {
        title: actualLanguage.offline.error.button,
        onClick: () => toolkit.card.showPrevious()
    }

    return <Button {...buttonProps} />
}