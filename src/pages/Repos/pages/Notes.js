import {
    CardBlock
} from "@webx/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

function Notify () {
    return <div className="repos-wrapper">
        <Headline title="Notify" />
        <CardBlock className="repos-page options">
            <div className="repo-description">
                Приложение-клон iCloud Заметок, созданное в целях теста WebX UI
            </div>
        </CardBlock>
        <CardBlock className="repos-page options">
            <div className="options-button-list">
                <LinkButton title="Запустить" link="https://kensoi.github.io/notify" />
            </div>
        </CardBlock>
    </div>
}

export default Notify;