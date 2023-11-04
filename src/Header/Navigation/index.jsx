import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import data from "./data"
import Button from "../components/Navigation"

import "./stylesheet.scss"


function Link ({name, href}) {
    const toolkit = useToolKit()

    const buttonProps = {
        children: name[toolkit.settings.language],
        href: href
    }

    return <li key={nanoid()}>
        <a {...buttonProps}/>
    </li>
}

function Content ({isCard}) {
    const ulProps = {
        className: isCard ? "x-block card-menu" : "header-navigation"
    }

    return <ul {...ulProps}>
        {
            data.map(Link)
        }
    </ul>
}

export default function ({isCard}) {
    const toolkit = useToolKit()

    return isCard ? <Button onClick={
        () => {
            toolkit.card.show(<Content isCard/>)
        }
    } /> : <Content />
}