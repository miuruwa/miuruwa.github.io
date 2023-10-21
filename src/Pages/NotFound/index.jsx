import {
    useEffect
} from "react"

import Illustration from "./Illustration"
import Message from "./Message"

import "./stylesheet.scss"

export default function () {
    useEffect(
        () => {
            document.title = "не найдено / miuruwa"
        }, []
    )
    return <div className="not-found">
        <Illustration />
        <Message />
    </div>
}