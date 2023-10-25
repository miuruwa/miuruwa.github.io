import { Button } from "@webx/forms"
import { removeUrlParameter } from "~/utils/URLParameters"


export default function ({ label, link }) {
    const buttonProps = {
        title: label,
        className: "link-button",
        theme: "transparent",
        onClick: () => {
            removeUrlParameter("id")
            window.location.href = link
        }
    }

    return <Button {...buttonProps} />
}
