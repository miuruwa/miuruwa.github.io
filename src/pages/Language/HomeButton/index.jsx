import { 
    Fragment
} from "react"

import {
    useToolKit
} from "@shared/toolkit"

import {
    Button
} from "@ui"

import titleLang from "./languages"

import {
    useLanguage
} from "../Context"


export default function () {
    const toolkit = useToolKit()
    const [language, _] = useLanguage()
    

    if (language === "unset") {
        return <Fragment />
    }

    const props = {
        title: titleLang[language],
        className: "home-lang-button",
        theme: "white",
        onClick: () => {
            toolkit.settings.language = language
            const path = window.localStorage.getItem("get-cache")
            window.location.href = path || "https://miuruwa.ru/home"
        }
    }

    return <Button {...props} />
}
