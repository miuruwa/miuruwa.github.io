import {
    ButtonBlock
} from "@webx/forms"

import {
    ShoppingCartIcon,
    NotesIcon,
    AutoAwesomeMosaicIcon,
    WebXIcon,
    VKBotKitLogo
} from "icons/repos/menu"

import Header from "./Header"
import MenuButton from "./MenuButton"

function Menu() {
    return <div className="repos-menu">
        <Header />
        <ButtonBlock className="repos-block">
            <MenuButton
                    icon={<WebXIcon/>}
                    title="WebX"
                    page={2}
            />
            <MenuButton
                    icon={<ShoppingCartIcon/>}
                    title="Cartify"
                    page={3}
            />
            <MenuButton
                    icon={<NotesIcon/>}
                    title="Notify"
                    page={4}
            />
        </ButtonBlock>
        <ButtonBlock className="repos-block">
            <MenuButton
                    icon={<VKBotKitLogo />}
                    title="VKBotKit"
                    page={5}
            />
            <MenuButton
                    icon={<AutoAwesomeMosaicIcon/>}
                    title="Менеджер Марсель"
                    page={8}
            />
            <MenuButton
                    icon={<AutoAwesomeMosaicIcon/>}
                    title="Канарейка"
                    page={7}
            />
        </ButtonBlock>
    </div>
}

export default Menu