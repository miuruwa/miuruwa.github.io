import {
    Button
} from "@webx/forms"

import {
    useLanguage
} from "../Context"


export default function ({ selectedLanguage }) {
    const [_, setLanguage] = useLanguage()

    const props = {
        theme: "transparent",
        title: selectedLanguage.title,
        onClick: () => {
            setLanguage(selectedLanguage.name)
        }
    }

    return <Button {...props} />
}
