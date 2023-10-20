import {
    CardBlock
} from "@webx/forms"

// import LinkButton from "../Repos/components/LinkButton"

import Face from "./Face"
import Tabs from "./Tabs"

import {
    useEffect
} from "react"

function removeUrlParameter(paramKey) {
    const url = window.location.href
    var r = new URL(url)
    r.searchParams.delete(paramKey)
    const newUrl = r.href
    window.history.pushState({ path: newUrl }, '', newUrl)
}

function Home () {
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

export default Home