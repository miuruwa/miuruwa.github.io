import {
    CardBlock
} from "@webx-ui/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function CanaryBot () {
    return <div className="repos-wrapper">
        <Headline title="Канарейка" />
        <CardBlock className="repos-page options">
            <div className="repo-description">
                Архивированный репозиторий с исходным кодом чат-бота, на котором был создан VKBotKit. Целью этого бота было упрощение менеджмента беседы сообщества, а также проводку некоторых развлекательных функций.
            </div>
            <div className="repo-description">
                Работает на VKBotKit
            </div>
        </CardBlock>
        <CardBlock className="repos-page options">
            <div className="options-button-list">
                <LinkButton title="Исходный код" link="https://github.com/kensoi/pycanarybot" />
            </div>
        </CardBlock>
    </div>
}