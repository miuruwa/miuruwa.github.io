import {
    Button
} from "@webx/forms"

export default function ({ title, children, link }) {
    const buttonProps = {
        theme: "transparent",
        title: title || children,
        onClick: () => {
            window.open(link)
        }
    }

    return <Button {...buttonProps} />
}