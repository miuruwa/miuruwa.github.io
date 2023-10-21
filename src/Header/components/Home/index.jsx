import Icon from "@webx/icons/DevIcon"
import "./stylesheet.scss"

export default function ({Mobile}) {
    const divProps = {
        children: <Icon />,
        className: Mobile ? "header-home mobile" : "header-home",
        title: "На главную",
        onClick: () => {
            window.location.pathname = "/home"
        }
    }

    return <div {...divProps} />
}