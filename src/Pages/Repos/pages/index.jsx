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

import Menu from "./Menu"

import {
    getUrlParameter
} from "~/utils/URLParameters"


function Resolver() {
    const toolkit = useToolKit()

    useEffect(() =>{
        const repo = getUrlParameter("id")
        
        if (repo !== "") {
            toolkit.pages.repos.id = repo
        }
    }, [])

    const pages = {
        "cartify": <Cartify />,
        "notify": <Notify />,
        "vkbotkit": <VKBotKit />,
        "marcelbot": <MarcelBot />,
        "webx": <WebX />,
        default: <WebX />,
    }

    return pages[toolkit.pages.repos.id] || pages.default
}

export {
    Resolver, Menu
}