import { 
    useToolKit
} from "@webx/toolkit"

import { 
    CardBlock, Button
} from "@webx/forms"

import Caching from "./Caching"
import Language from "./Language"
import languages from "./languages"

import "./stylesheet.scss"


function OptionsBlock () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    const props = {
        theme: "white",
        title: actualLanguage.close,
        onClick: () => {
            toolkit.card.return()
        }
    }

    return <div className="card-options">
        <Button {...props} />
    </div>
}

export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <form className="settings-card">
        <h3>
            {actualLanguage.title}
        </h3>
        <CardBlock>
            <div className="settings-card-content">
                <h6>
                    {actualLanguage.labels[0]}
                </h6>
                <Language />
                <Caching />
            </div>
            <OptionsBlock />
        </CardBlock>
    </form>
}