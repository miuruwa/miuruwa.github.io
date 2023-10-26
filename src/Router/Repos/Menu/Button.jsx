import { Button } from "@webx/forms"

export default function ({ icon, label, bindState }) {
    const buttonProps = {
        icon: icon,
        title: label,
        theme: "transparent",
        onClick: bindState
    }

    return <Button {...buttonProps} />
}
