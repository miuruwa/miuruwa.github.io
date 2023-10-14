import {
    useToolKit
} from "@webx/toolkit"

import Desktop from "./Desktop"
import Mobile from "./Mobile"


function Layout () {
    const toolkit = useToolKit()

    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    if (window.location.pathname == "/") {
        return <></>
    }

    return IS_DESKTOP ? <Desktop /> : <Mobile />
}

export default Layout