import {
    useEffect
} from "react"

import {
    useToolKit
} from "@shared/toolkit"

import Illustration from "./Illustration"
import Message from "./Message"
import languages from "./languages"

import "./stylesheet.scss"


export default function () {
    const toolkit = useToolKit()

    useEffect(
        () => {
            document.title = `${languages[toolkit.settings.language].title} / miuruwa`
        }, []
    )
    return <div className="not-found">
        <Illustration />
        <Message />
    </div>
}