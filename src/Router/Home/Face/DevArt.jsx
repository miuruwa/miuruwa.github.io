import {
    useToolKit
} from "@webx/toolkit"

import Illustration from "/Risha&Nastya.png"


export default function () {
    const toolkit = useToolKit()
    const IS_DESKTOP = toolkit.settings.windowWidth >= 1280

    return IS_DESKTOP ? <img src={Illustration} /> : <></>
}
