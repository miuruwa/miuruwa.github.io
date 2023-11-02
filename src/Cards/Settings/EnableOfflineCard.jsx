import { 
    useToolKit
} from "@webx/toolkit"

import {
    CardBlock
} from "@webx/forms"

import ShowSettingsButton from "./ShowSettingsButton"
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="cart-calc-message">
        <h6>
            {actualLanguage.offline.error.title}
        </h6>
        <CardBlock>
            <p>
                {actualLanguage.offline.error.content}
            </p>
        </CardBlock>
        <ShowSettingsButton />
    </div>
}