import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import Feature from "./Feature"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <>
        <h6>
            {actualLanguage.features.title}
        </h6>
        <div className="marcel-features">
            {actualLanguage.features.array.map(
                item => <Feature key={nanoid()} children={item} />
            )}
        </div>
    </>
}
