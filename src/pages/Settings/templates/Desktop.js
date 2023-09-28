import {
    useToolKit
} from "@webx/toolkit"

import {
    MountTransition
} from "@webx/transitions/"

import {
    Menu,
    Resolver
} from "../pages"

export function Template() {
    const toolkit = useToolKit()

    return <div className="desktop settings">
        <Menu />
        <MountTransition
            mountState={toolkit.pages.settings.mounted}
            visibilityState={toolkit.pages.settings.loaded}
        >
            <Resolver />
        </MountTransition>
    </div>
}
