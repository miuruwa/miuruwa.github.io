import {
    ButtonBlock
} from "@webx/forms"

import Header from "./Header"
import MenuButton from "./MenuButton"
import menuData from "./menuData"


function MapBlock(item) {
    return <MenuButton {...item} />
}

function MapData(block) {
    return <ButtonBlock className="repos-block">
        {
            block.map(MapBlock)
        }
    </ButtonBlock>
}

function Menu() {
    return <div className="repos-menu">
        <Header />
        {
            menuData.map(MapData)
        }
    </div>
}

export default Menu