import { useState } from "react"

import styles from "./Slider.module.scss";

// TODO: занести в @utils
export const handleChange = (setState) => (event => setState(event.target.value))

export const Slider = (props) => {
  const { root, input, output } = styles;
  const [state, setState] = useState({value: props.min})

  // TODO: занести в @utils
  const setValue = (value) => {
    if (props.min <= value && value <= props.max) {
      props.setValue(value)
      
      setState({value})
    }
  }

  return <div className={root}>
    <div className={input}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={state.value}
        onChange={handleChange(setValue)}
      />
    </div>
    <div className={output}>{state.value}</div>
  </div>
}