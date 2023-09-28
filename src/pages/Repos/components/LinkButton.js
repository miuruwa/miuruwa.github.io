import {
    Button
} from "@webx/forms"

export default function LinkButton({ title, children, link }) {
    const onClick = () => {
        window.open(link)
    }

    return <Button
        theme="white"
        title={title || children}
        onClick={onClick} />
}
