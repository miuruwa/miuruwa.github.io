import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import {
    CardBlock
} from "@webx/forms"

import languages from "./languages"


function Paragraph ({children}) {
    return <CardBlock>
        <p>
            {children}
        </p>
    </CardBlock>
}

export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <>
        <h6>
            {actualLanguage.description.title}
        </h6>
        {
            actualLanguage.description.content.map(
                item => <Paragraph key={nanoid()}>{item}</Paragraph>
            )
        }
    </>
}
