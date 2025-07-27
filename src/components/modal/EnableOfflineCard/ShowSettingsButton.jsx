import {
    useToolKit
} from "@shared/toolkit"

import { 
    Button
} from "@ui"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    const buttonProps = {
        title: actualLanguage.button,
        theme: "white",
        onClick: () => toolkit.card.showPrevious()
    }

    return <div className="card-options">
        <Button {...buttonProps} />
    </div>
}