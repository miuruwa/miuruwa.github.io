import {
    useToolKit
} from "@webx/toolkit"

import { 
    MountTransition
 } from "@webx/transitions/"

import {
    Menu, 
    default as Resolver
} from "../pages"


function Content() {
    const toolkit = useToolKit()

    switch (toolkit.pages.repos.id) {
        case "":
            return <Menu />

        default:
            return <Resolver />
    }
}

export default function () {
    const toolkit = useToolKit()

    return <MountTransition
        mountState={toolkit.pages.repos.mounted}
        visibilityState={toolkit.pages.repos.loaded}
    >
        <Content />
    </MountTransition>
}