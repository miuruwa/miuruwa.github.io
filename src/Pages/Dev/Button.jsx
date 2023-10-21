import {
    Button
} from "@webx/forms"

export default function ({ children, link }) {
    const buttonProps = {
        theme: "transparent",
        title: children,
        onClick: () => {
            window.open(link)
        }
    }

    return <Button {...buttonProps} />
}
