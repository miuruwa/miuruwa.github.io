import {
    Button
} from "@webx/forms"

function LinkButton({ title, link, path }) {
    const buttonProps = {
        theme: "transparent",
        title: title,
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

export default LinkButton