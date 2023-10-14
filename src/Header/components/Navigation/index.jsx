import Icon from "@webx/icons/MenuIcon"
import "./stylesheet.scss"

function Button({onClick}) {
    const divProps = {
        className: "header-navigation-button",
        title: "Открыть навигацию",
        children: <Icon />,
        onClick: onClick
    }

    return <div {...divProps} />
}

export default Button