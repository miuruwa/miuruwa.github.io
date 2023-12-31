import { useToolKit } from "@webx/toolkit"
import { Button } from "@webx/forms"


export default function ({ name, href }) {
    const toolkit = useToolKit()

    const buttonProps = {
        title: name[toolkit.settings.language],
        theme: "transparent",
        onClick: () => {
            window.location.pathname = href
        }
    }

    return <Button {...buttonProps} />
}
