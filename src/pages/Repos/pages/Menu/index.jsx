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
                    page={2}
            />
            <MenuButton
                    icon={<CartifyIcon/>}
                    title="Cartify"
                    page={3}
            />
            <MenuButton
                    icon={<NotesIcon/>}
                    title="Заметки"
                    page={4}
            />
        </ButtonBlock>
        <ButtonBlock className="repos-block">
            <MenuButton
                    icon={<VKBotKitIcon />}
                    title="VKBotKit"
                    page={5}
            />
            <MenuButton
                    icon={<BotIcon/>}
                    title="Менеджер Марсель"
                    page={8}
            />
            <MenuButton
                    icon={<BotIcon/>}
                    title="Канарейка"
                    page={7}
            />
        </ButtonBlock>
    </div>
}

export default Menu