import { 
    CardBlock
} from "@webx/forms"
import { 
    useToolKit
} from "@webx/toolkit"

import MenuIcon from "@webx/icons/MenuIcon"

import GoToRepos from "./GoToRepos"
import OpenSettings from "./OpenSettings"
import GoToAbout from "./GoToAbout"

function Links () {
    return <>
        <GoToRepos />
        <GoToAbout />
    </>
}

function LinksCard () {
    return <>
        <h6>
            Разделы
        </h6>
        <CardBlock>
            <Links />
        </CardBlock>
    </>
}

function OpenLinks() {
    const toolkit = useToolKit()
    
    function onClick() {
        toolkit.card.show(<LinksCard />)
    }

    return <div 
      className="header-button second" title="Открыть разделы"
      onClick={onClick}
    >
        <MenuIcon />
    </div>
}

function Mobile () {
    return <div className="header-menu">
        <OpenLinks />
        <OpenSettings />
    </div>
}

function Desktop () {
    return <>
        <div className="header-menu desktop-menu">
            <Links />
        </div>
        <OpenSettings />
    </>
}


function Menu () {
    const toolkit = useToolKit()

    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    if (IS_DESKTOP) {
        return <Desktop />
    }

    return <Mobile />
}

export default Menu