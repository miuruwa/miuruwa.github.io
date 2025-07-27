import {
    useToolKit
} from "@shared/toolkit"
import { useIsMobile } from "@hooks/useIsMobile"

import Home from "./components/Home"
import Navigation from "./Navigation"
import Settings from "./components/Settings"

import "./stylesheet.scss"


const Header = () => {
    const toolkit = useToolKit()

    const isMobile = useIsMobile(768);

    if (toolkit.settings.language === "unset") {
        return <></>
    }

    return <div className="header">
        <div className="header-frame">
            <Home Mobile={isMobile}/>
            <Navigation isCard={isMobile}/>
            <Settings Mobile={isMobile}/>
        </div>
    </div>
}

export default Header;