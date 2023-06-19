import {
    CardBlock
} from "@webx-ui/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function VKBotKit () {
    return <div className="repos-wrapper">
        <Headline title="VKBotKit" />
        <CardBlock className="repos-page options">
            <div className="repo-description">
                VKBotKit это Python фреймворк, предназначенный для работы чат-бота в сообществе ВКонтакте.
            </div>
            <div className="repo-description">
                VKBotKit спроектирован с целью упростить и структуризировать контент и настроиваемый функционал. Библиотека работает в связке с VK Bots API, а также библиотекой aiohttp.
            </div>
        </CardBlock>
        <CardBlock className="repos-page options">
            <div className="options-button-list">
                <LinkButton title="Python библиотека" link="https://github.com/vkbotkit/vkbotkit" />
                <LinkButton title="Шаблон" link="https://github.com/vkbotkit/template" />
                <LinkButton title="Примеры" link="https://github.com/vkbotkit/examples" />
            </div>
        </CardBlock>
    </div>
}