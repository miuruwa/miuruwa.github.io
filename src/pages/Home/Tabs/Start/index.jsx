import { useToolKit } from "@webx/toolkit"
import title from "./languages"


export default function () {
    const toolkit = useToolKit()

    return <h3>
        {title[toolkit.settings.language]}
    </h3>
}
