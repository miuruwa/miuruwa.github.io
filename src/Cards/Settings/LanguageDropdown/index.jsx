import {
    useToolKit
} from "@webx/toolkit"

import {
    Button,
    Dropdown
} from "@webx/forms"

import languages from "./languages"
import LanguageButtonList from "./LanguageButtonList"


export default function () {
    const toolkit = useToolKit()

    const actualLanguageID = languages.findIndex(item => item.name === toolkit.settings.language)
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