import {
    useToolKit
} from "@webx/toolkit"

import {
    CardBlock
} from "@webx/forms"

import HomeButton from "./HomeButton"
import languages from "../languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <div className="not-found-content">
        <h3>
            {actualLanguage.headline}
        </h3>
        <CardBlock>
            <p>
                {actualLanguage.road}
            </p>
            <p>
                {actualLanguage.tryHome}
            </p>
            <HomeButton />
        </CardBlock>
    </div>
}