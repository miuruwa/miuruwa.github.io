import { useEffect } from "react"

const Meta: Layout.Meta = ({children, title}) => {
  useEffect(
    () => {
      document.title = `${title} × Celestial expanse`
    }, [title]
  )

  return children
}

export default Meta;
