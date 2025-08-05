import { useState } from 'react'

import DoneIcon from "@icons/AddIcon";
import { classNames } from '@utils/classNames';

import styles from "./Checkbox.module.scss";

export const Checkbox = ({
  state, setState, children, ...props
}) => {
  const {
    root,
    marked,
    icon,
    title,
  } = styles;

  const [triggered, setTriggered] = useState(state)

  // TODO: сделать обёртку вокруг setState с задержкой для анимаций.
  const onToggle = () => {
    setTriggered(!triggered);
    setTimeout(() => setState(!state), 100);
  }

  return <div 
    className={classNames(root, {
      [marked]: triggered
    })} 
    {...props}>
    <div className={icon} onClick={onToggle}><DoneIcon /></div>
    (children) && <div className={title}>{children}</div>
  </div>
}