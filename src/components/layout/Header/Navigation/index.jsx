import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@shared/toolkit"

import data from "./data"
import Button from "../components/Navigation"

import Navigation from "@modal/Navigation"

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

function Content () {
    return <ul className="header-navigation">
        {data.map(Link)}
    </ul>
}

export default function ({isCard}) {
    const toolkit = useToolKit()

    return isCard ? <Button onClick={
        () => {
            toolkit.card.show(<Navigation />)
        }
    } /> : <Content />
}