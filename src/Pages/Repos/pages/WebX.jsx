import {
    CardBlock
} from "@webx/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function WebX () {
    return <div className="repos-wrapper">
        <Headline title="WebX" />
        <h6>
            Описание
        </h6>
        <CardBlock className="repos-page options">
            <p>
                WebX - шаблон React приложения от kensoi, созданный для быстрого написания приложения.
            </p>
            <p>
                У WebX есть 2 реализации: на Vite и Create-React-App
            </p>
        </CardBlock>
        <h6>
            Полезные ссылки
        </h6>
        <div className="options">
            <LinkButton title="Шаблон на GitHub" link="https://github.com/webx-ui/template" />
        </div>
    </div>
}