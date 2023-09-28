import {
    CardBlock
} from "@webx-ui/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function WebX () {
    return <div className="repos-wrapper">
        <Headline title="WebX" />
        <CardBlock className="repos-page options">
            <div className="repo-description">
                WebX - шаблон, используемый мной для разработки React приложений
            </div>
            <div className="repo-description">
                WebX использует внешний вид VK UI и иконки для Material UI
            </div>
        </CardBlock>
        <CardBlock className="repos-page options">
            <div className="options-button-list">
                <LinkButton title="Шаблон на GitHub" link="https://github.com/webx-ui/template" />
            </div>
        </CardBlock>
    </div>
}