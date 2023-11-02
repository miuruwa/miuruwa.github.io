import {
    useEffect, useState, createContext
} from "react"

import {
    Navigate
} from "react-router-dom"

import { useToolKit } from "@webx/toolkit"


import Headline from "./Headline"
import HomeButton from "./HomeButton"
import LanguageDropdown from "./LanguageDropdown"

import "./stylesheet.scss"

import {
    LanguageContext
} from "./Context"


export default function () {
    const toolkit = useToolKit()

    if (toolkit.settings.language !== "unset") {
        return <Navigate to="/home" />
    }

    useEffect(
        () => {
            document.title = "??? / miuruwa"
        }, []
    )

    return <div className="language">
        <LanguageContext>
            <Headline />
            <LanguageDropdown />
            <HomeButton />
        </LanguageContext>
    </div>
}