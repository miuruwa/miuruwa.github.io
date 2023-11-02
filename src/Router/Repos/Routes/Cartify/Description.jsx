import {
    useToolKit
} from "@webx/toolkit"

import {
    CardBlock
} from "@webx/forms"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <>
        <h6>
            {actualLanguage.description.title}
        </h6>
        <CardBlock>
            <p>
                {actualLanguage.description.content}
            </p>
        </CardBlock>
    </>
}
