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


export default function () {
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