import {
    CardBlock
} from "@webx/forms"

import HomeButton from "./HomeButton"


export default function () {
    return <div className="not-found-content">
        <h1>
            Затерялся, путник?
        </h1>
        <CardBlock>
            <p>
                Возможно вы заблудились. Попробуйте вернуться назад к известной дорожке.
            </p>
            <p>
                Или вернитесь на главную
            </p>
        </CardBlock>
        <HomeButton />
    </div>
}