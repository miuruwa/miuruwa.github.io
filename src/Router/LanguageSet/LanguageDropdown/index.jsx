import {
    Button,
    Dropdown
} from "@webx/forms"

import {
    useLanguage
} from "../Context"

import languages from "./languages"
import LanguageButtonList from "./LanguageButtonList"


export default function () {
    const [language, _] = useLanguage()
    

    const actualLanguageID = languages.findIndex(item => item.name === language)
    const actualLanguage = languages[~actualLanguageID ? actualLanguageID : 0]

    const buttonProps = {
        theme: "white",
        title: actualLanguage.title,
        isDropdown: true
    }
    const dropdownProps = {
        dropdown: <LanguageButtonList />,
        contentPosition: "bottom-right",
        listDirection: "row",
        children: <Button {...buttonProps} />
    }

    return <Dropdown {...dropdownProps} />
}