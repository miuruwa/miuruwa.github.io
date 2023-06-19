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

export function Template() {
    const toolkit = useToolKit()

    return <div className="desktop repos">
        <Menu />
        <MountTransition
            mountState={toolkit.pages.repos.mounted}
            visibilityState={toolkit.pages.repos.loaded}
        >
            <Resolver />
        </MountTransition>
    </div>
}
