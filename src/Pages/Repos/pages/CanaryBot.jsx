import {
    CardBlock
} from "@webx/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function CanaryBot () {
    return <div className="repos-wrapper">
        <Headline title="Канарейка" />
        <CardBlock className="repos-page">
            <p>
                Архивированный репозиторий с исходным кодом чат-бота, на основе которого был создан фреймворк VKBotKit. Целью этого бота было упрощение менеджмента беседы сообщества, а также проводку некоторых развлекательных функций.
            </p>
            <p>
                Работает на VKBotKit
            </p>
        </CardBlock>
        <h6>
            Полезные ссылки
        </h6>
        <div className="options">
            <LinkButton title="Исходный код" link="https://github.com/kensoi/pycanarybot" />
        </div>
    </div>
}