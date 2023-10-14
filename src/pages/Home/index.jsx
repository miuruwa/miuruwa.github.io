import {
    CardBlock
} from "@webx/forms"

import LinkButton from "../Repos/components/LinkButton"

import {
    useEffect
} from "react"

function Main () {
    useEffect(
        () => {
            document.title = "homepage / kensoi"
        }, []
    )
    return <>
        <h1>
            домашняя страница
        </h1>
    </>
}

export default Main