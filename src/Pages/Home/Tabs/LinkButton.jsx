import {
    Button
} from "@webx/forms"

function LinkButton({ icon, title, link, path }) {
    const buttonProps = {
        icon: icon,
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