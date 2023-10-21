import Icon from "@webx/icons/MenuIcon"
import "./stylesheet.scss"


export default function ({onClick}) {
    const divProps = {
        className: "header-navigation-button",
        title: "Открыть навигацию",
        children: <Icon />,
        onClick: onClick
    }

    return <div {...divProps} />
}