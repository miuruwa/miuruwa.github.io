import {
    CardBlock
} from "@webx/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

function Cartify () {
    return <div className="repos-wrapper">
        <Headline title="Cartify" />
        <CardBlock className="repos-page options">
            <div className="repo-description">
                Калькулятор для подсчитывания общей стоимости всех выбранных в магазине продуктов.
            </div>
            <div className="repo-description">
                Приложение ориентировано в первую очередь на студентов.
            </div>
        </CardBlock>
        <CardBlock className="repos-page options">
            <div className="options-button-list">
                <LinkButton title="Запустить" link="https://kensoi.github.io/cartify" />
            </div>
        </CardBlock>
    </div>
}

export default Cartify