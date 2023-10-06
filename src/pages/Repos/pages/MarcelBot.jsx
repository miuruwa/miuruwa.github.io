import {
    CardBlock
} from "@webx/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

function MarcelBot () {
    return <div className="repos-wrapper">
        <Headline title="Менеджер Марсель" />
        <CardBlock className="repos-page options">
            <p>
                Марсель -- чат-бот, предназначенный для дубликации постов из ВК сообщества в другие соцсети: X (Twitter) и Telegram
            </p>
            <p>
                Также бот репостит пост в беседу ВК.
            </p>
            <p>
                Работает на VKBotKit
            </p>
        </CardBlock>
        <h6>
            Полезные ссылки
        </h6>
        <div className="options">
            <LinkButton title="Сообщество" link="https://vk.com/marcelbot" />
            <LinkButton title="Исходный код" link="https://github.com/kensoi/marcelbot" />
        </div>
    </div>
}

export default MarcelBot