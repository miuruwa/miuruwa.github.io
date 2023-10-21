import {
    useEffect
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import WebX from "./WebX"
import Cartify from "./CartCalc"
import Notify from "./Notes"

import VKBotKit from "./VKBotKit"
import MarcelBot from "./MarcelBot"

export {
    default as Menu
} from "./Menu"


const menuData = {
    cartify: <Cartify />,
    notify: <Notify />,
    vkbotkit: <VKBotKit />,
    marcelbot: <MarcelBot />,
    default: <WebX />
}

function GetIdByParameter () {
    const url = window.location.href
    const r = new URL(url)

    const repo = r.searchParams.get("id") || ""

    toolkit.pages.repos.id = repo
}

export default function () {
    const toolkit = useToolKit()
    useEffect(GetIdByParameter, [])
    
    return menuData[toolkit.pages.repos.id] || menuData.default
}