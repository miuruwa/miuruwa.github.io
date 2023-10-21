import {
    CardBlock
} from "@webx/forms"

// import LinkButton from "../Repos/components/LinkButton"

import Face from "./Face"
import Tabs from "./Tabs"

import {
    useEffect
} from "react"

import {
    removeUrlParameter
} from "~/utils/URLParameters"

export default function () {
    useEffect(
        () => {
            document.title = "главная / miuruwa"
            removeUrlParameter("id")
        }, []
    )
    return <>
        <Face />
        <Tabs />
    </>
}