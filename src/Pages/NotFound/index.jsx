import {
    useEffect
} from "react"

import Illustration from "./Illustration"
import Message from "./Message"

import "./stylesheet.scss"

function NotFound() {
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

export default NotFound