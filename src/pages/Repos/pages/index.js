import {
    useToolKit
} from "@webx/toolkit"

import Main from "./Main"

import WebX from "./WebX"
import Cartify from "./CartCalc"
import Notify from "./Notes"

import VKBotKit from "./VKBotKit"
import CanaryBot from "./CanaryBot"
import PopokaBot from "./PopokaBot"
import MarcelBot from "./MarcelBot"

import Menu from "./Menu"

function Resolver() {
    const toolkit = useToolKit()

    switch (toolkit.pages.repos.number) {
        case 2:
            return <WebX />

        case 3:
            return <Cartify />

        case 4:
            return <Notify />

        case 5:
            return <VKBotKit />

        case 6:
            return <PopokaBot />

        case 7:
            return <CanaryBot />

        case 8:
            return <MarcelBot />
    
        default:
            return <Main />
    }
}

export {
    Main, Resolver, Menu
}