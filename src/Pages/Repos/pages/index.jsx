import {
    useEffect
} from "react"

import {
    useToolKit
} from "@webx/toolkit"


import menuData from "./menuData"

export {
    default as Menu
} from "./Menu"


function GetIdByParameter () {
    const url = window.location.href
    const r = new URL(url)

    return r.searchParams.get("id") || ""
}

export default function () {
    const toolkit = useToolKit()
    useEffect(() => {
        toolkit.pages.repos.id = GetIdByParameter()
    }, [])
    
    return menuData[toolkit.pages.repos.id] || menuData.default
}