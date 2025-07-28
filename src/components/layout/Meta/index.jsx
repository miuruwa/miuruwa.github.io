import { useEffect } from "react"

const Meta = ({children, title}) => {
  useEffect(
    () => {
      document.title = `${title} / miuruwa`
    }, []
  )

  return children
}

export default Meta;
