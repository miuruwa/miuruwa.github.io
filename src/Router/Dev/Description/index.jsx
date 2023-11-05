import { CardBlock } from "@webx/forms"
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
        <CardBlock>
            <p>
                {actualLanguage.short}
                <br />
                {actualLanguage.hobby}
            </p>
            <p>
                {actualLanguage.pasta}
            </p>
        </CardBlock>
    </>
}
