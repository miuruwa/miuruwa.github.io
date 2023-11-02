import { nanoid } from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import LinkButton from "../../components/LinkButton"

import languages from "./languages"


const routes = [
    {
        label: "source",
        link: "https://github.com/vkbotkit/vkbotkit"
    },
    {
        label: "template",
        link: "https://github.com/vkbotkit/template"
    },
    {
        label: "examples",
        link: "https://github.com/vkbotkit/examples"
    }
]

export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <>
        <h6>
        {actualLanguage.links.title}
        </h6>
        <div className="options">
            {
                routes.map(item => <LinkButton key={nanoid()} label={actualLanguage.links[item.label]} link={item.link} />)
            }
        </div>
    </>
}