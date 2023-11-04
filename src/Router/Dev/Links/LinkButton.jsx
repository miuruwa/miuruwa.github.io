import {
    Button
} from "@webx/forms"
import { useToolKit } from "@webx/toolkit"


export default function ({ icon, title, link, path }) {
    const toolkit = useToolKit()

    const buttonProps = {
        icon: icon,
        theme: "transparent",
        title: title[toolkit.settings.language],
        onClick: () => {
            if (link) {
                window.location.href = link
                return
            }
            window.location.pathname = path
        }
    }

    return <Button {...buttonProps} />
}