import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import languages from "./languages"


function Feature ({title, li}) {
    return <h3>
        {li} {title}
    </h3>
}

export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <>
        <h6>
            {actualLanguage.features.title}
        </h6>
        {
            actualLanguage.features.array.map(
                item => <Feature key={nanoid()} title={item} li={actualLanguage.features.li} />
            )
        }
    </>
}
