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
                Менеджер Марсель это бот ВКонтакте, предназначенный для сокращения рутины. Вот её основной функционал:
            </p>
            <p>
                Работает при помощи библиотеки VKBotKit
            </p>
        </CardBlock>
        <h6>
            функционал
        </h6>
        <CardBlock className="repos-page options">
            <p>
                1. Оповещение о новой записи в беседе
            </p>
        </CardBlock>
        <CardBlock className="repos-page options">
            <p>
                2. Оповещение о новой записи в телеграм-канале
            </p>
        </CardBlock>
        <CardBlock className="repos-page options">
            <p>
                3. Дублирование поста в X (бывш. Твиттер) с возможностью изменить текст
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