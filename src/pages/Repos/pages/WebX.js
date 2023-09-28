import {
    CardBlock
} from "@webx/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function WebX () {
    return <div className="repos-wrapper">
        <Headline title="WebX" />
        <CardBlock className="repos-page options">
            <p>
                WebX - шаблон, используемый мной для разработки React приложений
            </p>
            <p>
                WebX использует внешний вид VK UI и иконки для Material UI
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