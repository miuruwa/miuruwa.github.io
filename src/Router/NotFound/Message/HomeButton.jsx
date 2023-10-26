import {
    Button
} from "@webx/forms"


export default function () {
    const buttonProps = {
        title: "на главную",
        theme: "white",
        onClick: () => {
            window.location.path = "/home"
        }
    }

    return <Button {...buttonProps} />
}