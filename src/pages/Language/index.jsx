import {
    useEffect
} from "react"

import { useToolKit } from "@shared/toolkit"


import Headline from "./Headline"
import HomeButton from "./HomeButton"
import LanguageDropdown from "./LanguageDropdown"

import "./stylesheet.scss"

import {
    LanguageContext, useLanguage
} from "./Context"
import { CardBlock } from "@ui"
import languages from "./languages"

function Label () {
    const [language, _] = useLanguage()

    return <p>
        {languages[language].language}
    </p>
}

export default function () {

    useEffect(
        () => {
            document.title = "??? / miuruwa"
        }, []
    )

    return <div className="language">
        <LanguageContext>
            <CardBlock className="card-block">
                <Headline />
                <label>
                    <Label />
                    <LanguageDropdown />
                </label>
                <HomeButton />
            </CardBlock>
        </LanguageContext>
    </div>
}