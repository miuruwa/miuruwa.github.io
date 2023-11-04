import {
    useToolKit
} from "@webx/toolkit"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()

    const actualLanguage = languages[toolkit.settings.language]

    return <>
        <h3>
            {actualLanguage.title}
        </h3>
        <p>
            {actualLanguage.short}
            <br />
            {actualLanguage.hobby}
        </p>
        <p>
            {actualLanguage.pasta}
        </p>
    </>
}
