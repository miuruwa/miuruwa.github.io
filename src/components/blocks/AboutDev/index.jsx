import { CardBlock } from "@ui"
import {
    useToolKit
} from "@shared/toolkit"

import languageData from "@shared/languages"


export default function () {
    const toolkit = useToolKit()

    const pageData = languageData[toolkit.settings.language].about

    return <>
        <h3>
            {pageData.title}
        </h3>
        <CardBlock>
            <p>
                {pageData.short}
                <br />
                {pageData.hobby}
            </p>
            <p>
                {pageData.pasta}
            </p>
        </CardBlock>
    </>
}
