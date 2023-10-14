import {
    CardBlock
} from "@webx/forms"

import LinkButton from "../Repos/components/LinkButton"

import {
    useEffect
} from "react"

function Home () {
    useEffect(
        () => {
            document.title = "home / kensoi"
        }, []
    )
    return <>
        <h1>
            домашняя страница
        </h1>
    </>
}

export default Home