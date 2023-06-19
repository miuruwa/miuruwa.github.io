import {
    ButtonBlock
} from "@webx-ui/forms"

import {
    PersonIcon,
    ShoppingCartIcon,
    NotesIcon,
    AutoAwesomeMosaicIcon,
    WebXIcon,
    VKBotKitLogo
} from "icons/repos/menu"

import Header from "./Header"
import MenuButton from "./MenuButton"

export default function Menu() {
    return <div className="repos-menu">
        <Header />
        <ButtonBlock className="repos-block">
            <MenuButton
                    icon={<PersonIcon/>}
                    title="Главная"
                    page={1}
            />
        </ButtonBlock>
        <ButtonBlock className="repos-block">
            <MenuButton
                    icon={<WebXIcon/>}
                    title="WebX UI"
                    page={2}
            />
            <MenuButton
                    icon={<ShoppingCartIcon/>}
                    title="Калькулятор покупок"
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
                    icon={<VKBotKitLogo />}
                    title="VKBotKit"
                    page={5}
            />
            <MenuButton
                    icon={<AutoAwesomeMosaicIcon/>}
                    title="CanaryBot"
                    page={6}
            />
            <MenuButton
                    icon={<AutoAwesomeMosaicIcon/>}
                    title="PopokaBot"
                    page={7}
            />
        </ButtonBlock>
    </div>
}
