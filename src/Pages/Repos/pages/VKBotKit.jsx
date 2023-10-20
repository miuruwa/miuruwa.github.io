import {
    CardBlock
} from "@webx/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function VKBotKit () {
    return <div className="repos-wrapper">
        <Headline title="VKBotKit" />
        <h6>
            Описание
        </h6>
        <CardBlock className="repos-page options">
            <p>
                VKBotKit это Python фреймворк, предназначенный для работы чат-бота в сообществе ВКонтакте.
            </p>
            <p>
                VKBotKit спроектирован с целью упростить и структуризировать контент и настроиваемый функционал. Библиотека работает в связке с VK Bots API, а также библиотекой aiohttp.
            </p>
        </CardBlock>
        <h6>
            Полезные ссылки
        </h6>
        <div className="options">
            <LinkButton title="Python библиотека" link="https://github.com/vkbotkit/vkbotkit" />
            <LinkButton title="Шаблон" link="https://github.com/vkbotkit/template" />
            <LinkButton title="Примеры" link="https://github.com/vkbotkit/examples" />
        </div>
    </div>
}