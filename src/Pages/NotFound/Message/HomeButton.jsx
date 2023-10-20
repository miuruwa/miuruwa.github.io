import {
    Button
} from "@webx/forms"

function HomeButton() {
    const buttonProps = {
        title: "на главную",
        theme: "white",
        onClick: () => {
            window.location.path = "/home"
        }
    }

    return <Button {...buttonProps} />
}

export default HomeButton