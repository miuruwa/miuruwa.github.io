import {
    Button,
    CardBlock
} from "@webx/forms"

import "./stylesheet.scss"

function NotFound() {
    function MoveToRootButton() {

        function onClick() {
            window.location.href="https://kensoi.github.io/"
        }

        return <Button 
                title="Вернуться на главную"
                theme="white"
                onClick={onClick}
        />
    }

    return <div className="not-found">
        <h1>
            Ошиблись адресом?
        </h1>
        <CardBlock>
            <p>
                Страница не найдена, либо она не существует.
            </p>
            <p>
                Попробуйте вернуться на главную страницу.
            </p>
        </CardBlock>
        <MoveToRootButton/>
    </div>
}

export default NotFound