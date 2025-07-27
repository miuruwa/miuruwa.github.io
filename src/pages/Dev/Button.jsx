import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@ui"

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
