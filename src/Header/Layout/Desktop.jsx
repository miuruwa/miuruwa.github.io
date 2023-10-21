import Home from "../components/Home"
import Navigation from "../Navigation"
import Settings from "../components/Settings"

export default function () {
    return <div className="header">
        <div className="header-frame">
            <Home />
            <Navigation />
            <Settings />
        </div>
    </div>
}