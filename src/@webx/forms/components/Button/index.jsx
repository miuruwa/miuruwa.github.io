import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export function Button ({
    icon, title, isDropdown, xstyle, children, theme="usual", className, alt,
    ...props
}) {
    const ClassList = ["x-button"]

    ClassList.push(`theme-${theme}`)
    
    if (className) {
        ClassList.push(className)
    }
    
    if (icon) {
        ClassList.push("with-icon")
    }
    
    if (title) {
        ClassList.push("with-title")
    }

    if (isDropdown) {
        ClassList.push("at-dropdown")
    }

    const ButtonIcon = () => {
        if (icon) {
            return <div className="x-button-icon">
                {icon || " "}
            </div>
        }
    }

    const ButtonTitle = () => {
        if (title) {
            return <div className="x-button-title">
                {title || children || " "}
            </div>
        }
    }

    const ButtonDropdown = () => {
        if (isDropdown) {
            return <div className="x-button-icon x-button-dropdown">
                <KeyboardArrowDownIcon />
            </div>
        }
    }

    const buttonProps = {
        className: ClassList.join(" "),
        ...props,
        style: xstyle,
        title: alt,
    }

    return <div {...buttonProps}>
        <ButtonIcon />
        <ButtonTitle />
        <ButtonDropdown />
    </div>
}