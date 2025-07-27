import { useToolKit } from "@shared/toolkit"
import { Button } from "@ui"


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
