import {
    useToolKit
} from "@webx-ui/toolkit"

import Main from "./Main"

import WebX from "./WebX"
import CartCalc from "./CartCalc"
import Notes from "./Notes"

import VKBotKit from "./VKBotKit"
import CanaryBot from "./CanaryBot"
import MarcelBot from "./MarcelBot"

import Menu from "./Menu"

function Resolver() {
    const toolkit = useToolKit()

    switch (toolkit.pages.repos.number) {
        case 2:
            return <WebX />

        case 3:
            return <CartCalc />

        case 4:
            return <Notes />

        case 5:
            return <VKBotKit />

        case 6:
            return <CanaryBot />

        case 7:
            return <MarcelBot />
    
        default:
            return <Main />
    }
}

export {
    Main, Resolver, Menu
}