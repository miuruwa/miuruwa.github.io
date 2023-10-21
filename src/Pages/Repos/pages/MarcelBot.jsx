import {
    CardBlock
} from "@webx/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"


function Description () {
    return <>
        <h6>
            Описание
        </h6>
        <CardBlock className="repos-page options">
            <p>
                Менеджер Марсель это бот ВКонтакте, предназначенный для сокращения рутины. Вот её основной функционал:
            </p>
            <p>
                Работает при помощи библиотеки VKBotKit
            </p>
        </CardBlock>
    </>
}

function Functional () {
    return <>
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
    </>
}

function Links () {
    return <>
        <h6>
            Полезные ссылки
        </h6>
        <div className="options">
            <LinkButton title="Сообщество" link="https://vk.com/marcelbot" />
            <LinkButton title="Исходный код" link="https://github.com/kensoi/marcelbot" />
        </div>
    </>
}

export default function () {
    return <div className="repos-wrapper">
        <Headline title="Менеджер Марсель" />
        <Description/>
        <Functional />
        <Links />
    </div>
}