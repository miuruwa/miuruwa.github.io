import { 
    useToolKit
} from "@webx/toolkit"

import {
    CardBlock
} from "@ui"

import ShowSettingsButton from "./ShowSettingsButton"
import languages from "./languages"

import "./stylesheet.scss"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="error-offline">
        <h3>
            {actualLanguage.title}
        </h3>
        <CardBlock>
            <div className="error-card-content">
                <p>
                    {actualLanguage.content}
                </p>
            </div>
            <ShowSettingsButton />
        </CardBlock>
    </div>
}