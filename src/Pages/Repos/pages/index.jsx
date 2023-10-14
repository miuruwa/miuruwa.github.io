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
import CanaryBot from "./CanaryBot"

import Menu from "./Menu"


function Resolver() {
    const toolkit = useToolKit()

    useEffect(() =>{
        const url = window.location.href
        const r = new URL(url)

        const repo = r.searchParams.get("id") || ""

        toolkit.pages.repos.id = repo
    }, [])

    switch (toolkit.pages.repos.id) {
        case "cartify":
            return <Cartify />

        case "notify":
            return <Notify />

        case "vkbotkit":
            return <VKBotKit />

        case "canarybot":
            return <CanaryBot />

        case "marcelbot":
            return <MarcelBot />
    
        default:
            return <WebX />
    }
}

export {
    Resolver, Menu
}