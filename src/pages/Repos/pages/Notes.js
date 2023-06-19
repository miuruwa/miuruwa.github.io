import {
    CardBlock
} from "@webx-ui/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function Notes () {
    return <div className="repos-wrapper">
        <Headline title="Заметки" />
        <CardBlock className="repos-page options">
            <div className="repo-description">
                Приложение-клон iCloud Заметок, созданное в целях теста WebX UI
            </div>
        </CardBlock>
        <CardBlock className="repos-page options">
            <div className="options-button-list">
                <LinkButton title="Запустить" link="https://kensoi.github.io/notes" />
            </div>
        </CardBlock>
    </div>
}