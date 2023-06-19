import {
    CardBlock
} from "@webx-ui/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function PopokaBot () {
    return <div className="repos-wrapper">
        <Headline title="Попока бот" />
        <CardBlock className="repos-page options">
            <div className="repo-description">
                Архивированный репозиторий с исходным кодом чат-бота, который создавался в целях поддержки VKDonut чата одной известной художницы.
            </div>
            <div className="repo-description">
                Работает на VKBotKit
            </div>
        </CardBlock>
        <CardBlock className="repos-page options">
            <div className="options-button-list">
                <LinkButton title="Исходный код" link="https://github.com/kensoi/pypopokabot" />
            </div>
        </CardBlock>
    </div>
}