import { nanoid } from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import LinkButton from "../../components/LinkButton"

import languages from "./languages"


const routes = [
    {
        label: "bot",
        link: "https://vk.com/marcelbot"
    },
    {
        label: "source",
        link: "https://github.com/kensoi/marcelbot"
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
                routes.map(item => {
                    const props = {
                        label: actualLanguage.links[item.label],
                        link: item.link
                    }

                    return <LinkButton key={nanoid()} {...props} />
                })
            }
        </div>
    </>
}