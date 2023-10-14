import {
    Button,
    CardBlock
} from "@webx/forms"

import "./stylesheet.scss"
import Clouds from "./Illustration.png"
import Footage from "./footage.gif"
import {
    useEffect
} from "react"

function MoveToRootButton() {
    function onClick() {
        window.location.href="https://kensoi.github.io/homepage"
    }

    return <Button 
            title="Вернуться на главную"
            theme="white"
            onClick={onClick}
    />
}

function Illustration () {
    return <div className="not-found-background">
        <img src={Footage} />
        <img src={Clouds} />
    </div>
}

function Message () {
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
        <MoveToRootButton/>
    </div>
}

function NotFound() {
    useEffect(
        () => {
            document.title = "not found / kensoi"
        }, []
    )
    return <div className="not-found">
        <Message />
    </div>
}

export default NotFound