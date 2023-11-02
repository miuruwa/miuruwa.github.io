import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import {
    ButtonBlock
} from "@webx/forms"

import routes from "../Routes"
import Button from "./Button"

import "./stylesheet.scss"
import { usePages } from "../usePages"
import { insertUrlParameter } from "~/utils/URLParameters"
import languages from "./languages"


function Block (item) {
    const [_, setPage] = usePages()
    const toolkit = useToolKit()

    return <ButtonBlock key={nanoid()}>
        {
            item.map(item => {
                const bindState = () => {
                    setPage(item.repoID)
                    insertUrlParameter("id", item.repoID)
                }

                return <Button key={nanoid()} icon={item.icon} label={item.label[toolkit.settings.language]} bindState={bindState} />
            })
        }
    </ButtonBlock>
}

function Content () {
    return routes.map(Block)
}

export default function () {
    const toolkit = useToolKit()

    return <div className="code-menu">
        <h3>
            {languages[toolkit.settings.language]}
        </h3>
        <Content />
    </div>
}
