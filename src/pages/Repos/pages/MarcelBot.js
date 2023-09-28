import {
    CardBlock
} from "@webx/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

function MarcelBot () {
    return <div className="repos-wrapper">
        <Headline title="Менеджер Марсель" />
        <CardBlock className="repos-page options">
            <div className="repo-description">
                Марсель -- чат-бот, предназначенный для дубликации постов из ВК сообщества в другие соцсети: X (Twitter) и Telegram
            </div>
            <div className="repo-description">
                Также бот репостит пост в беседу ВК.
            </div>
            <div className="repo-description">
                Работает на VKBotKit
            </div>
        </CardBlock>
        <CardBlock className="repos-page options">
            <div className="options-button-list">
                <LinkButton title="Сообщество" link="https://vk.com/marcelbot" />
                <LinkButton title="Исходный код" link="https://github.com/kensoi/marcelbot" />
            </div>
        </CardBlock>
    </div>
}

export default MarcelBot