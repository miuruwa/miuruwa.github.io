import Menu from "./Menu"
import HomePageButton from "./HomePageButton"


function Header() {
    return <div className="header">
        <HomePageButton />
        <Menu />
    </div>
}

export default Header