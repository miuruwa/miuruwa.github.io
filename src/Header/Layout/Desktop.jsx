import Home from "../components/Home"
import Navigation from "../Navigation"
import Settings from "../components/Settings"

function Layout () {
    return <div className="header">
        <Home />
        <Navigation />
        <Settings />
    </div>
}

export default Layout