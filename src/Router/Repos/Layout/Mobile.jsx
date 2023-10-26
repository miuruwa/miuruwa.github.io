import { useEffect } from "react"

import Menu from "../Menu"
import Resolver from "../Resolver"

import { usePages } from "../usePages"


export default function () {
    const [page, setPage] = usePages()

    useEffect(() => {
        if (page === "main") {
            setPage("menu")
        }
    }, [])

    return <div className="code mobile">
        {page === "menu" ? <Menu /> : <Resolver />}
    </div>
}
