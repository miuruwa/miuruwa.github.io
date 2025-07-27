import { useEffect } from "react"
import useMiuruwaTitle from "./useMiuruwaTitle"

export default function () {
    const [animate, content] = useMiuruwaTitle()

    useEffect(() => {
        animate()
    }, [])

    return content
}
