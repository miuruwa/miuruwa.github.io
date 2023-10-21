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
                Калькулятор для подсчитывания общей стоимости всех выбранных в магазине продуктов.
            </p>
            <p>
                Приложение ориентировано в первую очередь на студентов.
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
            <LinkButton title="Запустить" link="https://kensoi.github.io/cartify" />
        </div>
    </>
}

export default function () {
    return <div className="repos-wrapper">
        <Headline title="Cartify" />
        <Description />
        <Links />
    </div>
}