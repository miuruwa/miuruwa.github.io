import {
    useToolKit
} from "@webx/toolkit"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <h6>
        {actualLanguage.alert.alert}
        <br />
        {actualLanguage.alert.name}
        <br />
        {actualLanguage.alert.future}
    </h6>
}