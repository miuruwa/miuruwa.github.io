import {
    useToolKit
} from "@webx/toolkit"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()

    const actualLanguage = languages[toolkit.settings.language]

    return <>
        <h6>
            {actualLanguage.short}
            <br />
            {actualLanguage.hobby}
        </h6>
        <h6>
            {actualLanguage.pasta}
        </h6>
    </>
}
