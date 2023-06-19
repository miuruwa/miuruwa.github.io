import {
    useToolKit
} from "@webx-ui/toolkit"

import { 
    MountTransition
 } from "@webx-ui/transitions/"

import {
    Menu, 
    Resolver
} from "../pages"

function Content() {
    const toolkit = useToolKit()

    switch (toolkit.pages.repos.number) {
        case 0:
            return <Menu />

        default:
            return <Resolver />
    }
}

export function Template() {
    const toolkit = useToolKit()

    return <MountTransition
        mountState={toolkit.pages.repos.mounted}
        visibilityState={toolkit.pages.repos.loaded}
    >
        <Content />
    </MountTransition>
}
