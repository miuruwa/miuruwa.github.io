import {
    Button,
    CardBlock
} from "@webx/forms"

import "./stylesheet.scss"


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

function NotFound() {
    return <div className="not-found">
        <h1>
            Ошиблись адресом?
        </h1>
        <CardBlock>
            <p>
                Не та эта страница вы которую искали.
            </p>
        </CardBlock>
        <MoveToRootButton/>
    </div>
}

export default NotFound