import {
    useToolKit
} from "@webx/toolkit"

const title = {
    "ru": "Домашняя страница",
    "eng": "Homepage"
}

export default function () {
    const toolkit = useToolKit()

    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    return IS_DESKTOP ? <></> : <h6>
        {title[toolkit.settings.language]}
    </h6>
}
