import {
    nanoid
} from "nanoid"

import {
    ButtonBlock
} from "@ui"

import languages from "./languages"

import LanguageButton from "./LanguageButton"


export default function () {
    return <ButtonBlock>
        {languages.data.map(
            item => <LanguageButton key={nanoid()} selectedLanguage={item} />
        )}
    </ButtonBlock>
}
