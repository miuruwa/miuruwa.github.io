import {
    useToolKit
} from "@webx/toolkit"

import {
    CardBlock
} from "@webx/forms"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()

    return <div className="main">
        <CardBlock>
            <h2>
                {languages[toolkit.settings.language]}
            </h2>
        </CardBlock>
    </div>
}
