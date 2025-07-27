import Headline from "./Headline"
import HomeButton from "./HomeButton"
import LanguageDropdown from "./LanguageDropdown"

import "./stylesheet.scss"

import {
    LanguageContext, useLanguage
} from "./Context"
import { CardBlock } from "@ui"
import languages from "./languages"
import Meta from "@layout/Meta"

function Label () {
    const [language, _] = useLanguage()

    return <p>
        {languages[language].language}
    </p>
}

const Language = () => {
    return <Meta title="???">
        <div className="language">
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
    </Meta>
}

export default Language;