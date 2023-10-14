import {
    ButtonBlock
} from "@webx/forms"

import CartifyIcon from "@webx/icons/CartifyIcon"
import NotesIcon from "@webx/icons/NotesIcon"
import WebXIcon from "@webx/icons/WebXIcon"
import VKBotKitIcon from "@webx/icons/VKBotKitIcon"
import BotIcon from "@webx/icons/BotIcon"

import Header from "./Header"
import MenuButton from "./MenuButton"

function Menu() {
    return <div className="repos-menu">
        <Header />
        <ButtonBlock className="repos-block">
            <MenuButton
                    icon={<WebXIcon/>}
                    title="WebX"
                    page="webx"
            />
            <MenuButton
                    icon={<CartifyIcon/>}
                    title="Cartify"
                    page="cartify"
            />
            <MenuButton
                    icon={<NotesIcon/>}
                    title="Заметки"
                    page="notify"
            />
        </ButtonBlock>
        <ButtonBlock className="repos-block">
            <MenuButton
                    icon={<VKBotKitIcon />}
                    title="VKBotKit"
                    page="vkbotkit"
            />
            <MenuButton
                    icon={<BotIcon/>}
                    title="Менеджер Марсель"
                    page="marcelbot"
            />
            <MenuButton
                    icon={<BotIcon/>}
                    title="Канарейка"
                    page="canarybot"
            />
        </ButtonBlock>
    </div>
}

export default Menu