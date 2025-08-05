import KeyboardArrowDownIcon from "@icons/AddIcon";

import styles from "./Button.module.scss";
import { classNames } from "@utils/classNames";

export const Button = ({
  icon, title, isDropdown, children, theme="usual", className, alt,
  ...props
}) => {
  const {
    root,
    buttonIcon,
    buttonTitle,
    buttonDropdown,
    withIcon,
    withTitle,
    atDropdown,
    usual,
    invert,
    transparent,
    white,
  } = styles;

  return <div 
      className={classNames(
      root,
      {
        [withIcon]: icon,
        [withTitle]: title,
        [atDropdown]: isDropdown,
        [usual]: theme === "usual",
        [invert]: theme === "invert",
        [transparent]: theme === "transparent",
        [white]: theme === "white",
      },
      [className]
    )}
    style={props.style}
    title={alt}
    {...props}>
      {icon && <div className={buttonIcon}>{icon}</div>}
      {(title || children) && <div className={buttonTitle}>{title || children}</div>}
      {isDropdown && <div className={classNames(buttonIcon, {}, [buttonDropdown])}><KeyboardArrowDownIcon /></div>}
  </div>
}