import { classNames } from "@utils/classNames";

import styles from "./Block.module.scss";

export const CardBlock = (props) => {
  const { root } = styles;
  
  return <div className={classNames(root, {}, [props.className])} style={props.xstyle} ref={props.xref} onClick={props.onClick}>
    {props.children}
  </div>
};
