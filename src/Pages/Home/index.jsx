import {
    useEffect
} from "react"

import Face from "./Face"
import Tabs from "./Tabs"

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