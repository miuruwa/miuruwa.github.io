import {
    useToolKit
} from "@webx/toolkit"

import LinkButton from "../../components/LinkButton"

import languages from "./languages"


export default function Links() {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <>
        <h6>
            {actualLanguage.links.title}
        </h6>
        <div className="options">
            <LinkButton label={actualLanguage.links.template} link="https://github.com/webx-ui/template" />
        </div>
    </>
}