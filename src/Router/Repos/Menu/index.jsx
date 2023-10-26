import { nanoid } from "nanoid"
import { ButtonBlock } from "@webx/forms"

import routes from "../Routes"
import Button from "./Button"

import "./stylesheet.scss"
import { usePages } from "../usePages"
import { insertUrlParameter } from "~/utils/URLParameters"


function Block (item) {
    const [_, setPage] = usePages()

    return <ButtonBlock key={nanoid()}>
        {
            item.map(item => {
                const bindState = () => {
                    setPage(item.repoID)
                    insertUrlParameter("id", item.repoID)
                }

                return <Button key={nanoid()} icon={item.icon} label={item.label} bindState={bindState} />
            })
        }
    </ButtonBlock>
}

function Content () {
    return routes.map(Block)
}

export default function () {
    return <div className="code-menu">
        <h3>
            Репозитории
        </h3>
        <Content />
    </div>
}
