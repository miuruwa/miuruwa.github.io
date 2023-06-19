import {
    CardBlock
} from "@webx-ui/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function CartCalc () {
    return <div className="repos-wrapper">
        <Headline title="Калькулятор покупок" />
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
                <LinkButton title="Запустить" link="https://kensoi.github.io/cart-calc" />
            </div>
        </CardBlock>
    </div>
}