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

    switch (toolkit.pages.repos.number) {
        case 3:
            return <Cartify />

        case 4:
            return <Notify />

        case 5:
            return <VKBotKit />

        case 7:
            return <CanaryBot />

        case 8:
            return <MarcelBot />
    
        default:
            return <WebX />
    }
}

export {
    Resolver, Menu
}