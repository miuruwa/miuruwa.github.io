import {
    useEffect
} from "react"

import { useToolKit } from "@shared/toolkit"

import Face from "./Face"
import Tabs from "./Tabs"

import {
    removeUrlParameter
} from "~/utils/URLParameters"
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()

    useEffect(
        () => {
            document.title = `${languages[toolkit.settings.language].title} / miuruwa`
            removeUrlParameter("id")
        }, []
    )
    return <>
        <Face />
        <Tabs />
    </>
}