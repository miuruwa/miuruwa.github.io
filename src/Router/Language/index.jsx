import {
    useEffect
} from "react"

import { useToolKit } from "@webx/toolkit"


import Headline from "./Headline"
import HomeButton from "./HomeButton"
import LanguageDropdown from "./LanguageDropdown"

import "./stylesheet.scss"

import {
    LanguageContext
} from "./Context"
import { CardBlock } from "@webx/forms"
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()

    useEffect(
        () => {
            document.title = "??? / miuruwa"
        }, []
    )

    return <div className="language">
        <LanguageContext>
            <Headline />
            <CardBlock className="card-block">
                <label>
                    <p>
                        {languages[toolkit.settings.language].language}
                    </p>
                    <LanguageDropdown />
                </label>
                <HomeButton />
            </CardBlock>
        </LanguageContext>
    </div>
}