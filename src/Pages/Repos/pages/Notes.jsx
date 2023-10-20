import {
    CardBlock
} from "@webx/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

function Notify () {
    return <div className="repos-wrapper">
        <Headline title="Заметки" />
        <h6>
            Описание
        </h6>
        <CardBlock className="repos-page options">
            <p>
                Приложение-клон iCloud Заметок, созданное в целях теста WebX UI
            </p>
        </CardBlock>
        <h6>
            Полезные ссылки
        </h6>
        <div className="options">
            <LinkButton title="Запустить" link="https://kensoi.github.io/notes" />
        </div>
    </div>
}

export default Notify;