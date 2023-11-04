import {
    useToolKit
} from "@webx/toolkit"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()

    const actualLanguage = languages[toolkit.settings.language]

    return <>
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
