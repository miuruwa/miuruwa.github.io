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
                Основной функционал - оповещение о новых записях группы ВКонтакте в определённой беседе и Телеграм-канале. Также бот дублирует пост из ВКонтакте в X
            </p>
            <p>
                Работает при помощи библиотеки VKBotKit
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