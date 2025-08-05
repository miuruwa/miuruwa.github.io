import { useRef, useState } from "react"

import ClearIcon from "@icons/ClearListIcon";
import { classNames } from "@utils/classNames";

import styles from "./TextField.module.scss";

export const TextField = ({
  icon: iconSVG, currency: currencyItem, placeholder,
  field, setField, ...props
}) => {
  const { root, withIcon, withClearButton, withCurrency, focused, icon, currency } = styles;
  const inputRef = useRef()

  const [focus, setFocus] = useState(false)
  const [inputField] = useState(field)
  const [valueCheckMark, setValueCheckMark] = useState(field)

  const focusOn = () => inputRef.current?.focus()
  const focusOff = () => inputRef.current?.blur()
  const onInput = event => setValueCheckMark(event.target.innerHTML)
  const onFocus = () => setFocus(true)
  
  const onBlur = () => {
    setField(valueCheckMark)
    setFocus(false)
  }

  const clearInput = () => {
    inputRef.current.innerHTML = ""
    setValueCheckMark("")
  }
  
  return <div 
      className={classNames(
        root, {
            [withIcon]: iconSVG,
            [withClearButton]: valueCheckMark !== "",
            [withCurrency]: valueCheckMark !== "" && currencyItem,
            [focused]: focus,
          }, [props.className])} 
      onClick={focusOn}
      onMouseLeave={focusOff}>
    {iconSVG && <div className={icon}>{iconSVG}</div>}
    {(() => <div 
      className="x-text-field-input"
      ref={inputRef}
      onFocus={onFocus}
      onBlur={onBlur}
      contentEditable="true"
      suppressContentEditableWarning={true}
      onInput={onInput}
      data-placeholder={currencyItem ? `${placeholder} (${currencyItem})` : placeholder}>
      {inputField}
    </div>)()}
    {currencyItem && valueCheckMark !== "" && <div className={currency}>{currencyItem}</div>}
    {valueCheckMark !== "" && <div className={classNames(icon, {}, [clearButton])} onClick={clearInput}><ClearIcon /></div>}
  </div>
}