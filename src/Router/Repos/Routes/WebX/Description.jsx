import {
    useToolKit
} from "@webx/toolkit"

import {
    CardBlock
} from "@webx/forms"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <>
        <CardBlock className="repos-page options">
            <p>
                {actualLanguage.description}
            </p>
        </CardBlock>
        <h6>
            {actualLanguage.realisation}
        </h6>
        <h3>
            {"~>"} Vite <br />
            {"~>"} Create-React-App
        </h3>
        <h6>
            {actualLanguage.projects}
        </h6>
        <h3>
            {"~>"} Cartify <br />
            {"~>"} Notes <br />
            {"~>"} miuruwa.github.io
        </h3>
    </>
}
