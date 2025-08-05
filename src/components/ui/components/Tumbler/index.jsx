import { useState } from "react"

import styles from "./Tumbler.module.scss";
import { classNames } from "@utils/classNames";

export const Tumbler = ({state, setState}) => {
  const { root, triggered } = styles;

  const [isTriggered, setTriggered] = useState(state)

  // TODO: вынести в @utils
  const onToggle = () => {
    setTriggered(!isTriggered)
    setTimeout(() => setState(!state), 100)
  }

  return <div className={classNames(root, {[triggered]: isTriggered})} onClick={onToggle}>
    <div>&nbsp;</div>
  </div>
}