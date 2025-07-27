import {
    Button
} from "@ui"
import { Fragment } from "react"

import {
    useLanguage
} from "../Context"


export default function ({ selectedLanguage }) {
    const [target, setLanguage] = useLanguage()

    const props = {
        theme: "transparent",
        title: selectedLanguage.title,
        onClick: () => {
            setLanguage(selectedLanguage.name)
        }
    }

    if (selectedLanguage.hidden) {
        return <Fragment />
    }

    if (selectedLanguage.name == "unset" ) {
        return <Fragment />
    }

    return <Button {...props} />
}
