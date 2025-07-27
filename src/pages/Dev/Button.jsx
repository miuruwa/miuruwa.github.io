import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

export default function ({ children, link }) {
    const toolkit = useToolKit()

    const buttonProps = {
        theme: "transparent",
        title: children[toolkit.settings.language],
        onClick: () => {
            window.open(link)
        }
    }

    return <Button {...buttonProps} />
}
