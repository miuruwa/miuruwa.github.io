import styles from "./Button.module.scss";
import { classNames } from "@utils/classNames";

export const Button: UI.Button = ({
  icon, title, theme="usual", className, alt,
  ...props
}) => {
  const {
    root,
    buttonIcon,
    buttonTitle,
    withIcon,
    withTitle,
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
          [usual]: theme === "usual",
          [invert]: theme === "invert",
          [transparent]: theme === "transparent",
          [white]: theme === "white",
        },
        [className])}
      style={props.style}
      title={alt}
      {...props}>
      {icon && <div className={buttonIcon}>{icon}</div>}
      {(title) && <div className={buttonTitle}>{title}</div>}
  </div>
}