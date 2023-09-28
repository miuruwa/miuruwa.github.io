import {
    useToolKit
} from "@webx/toolkit"

import {
    Button,
    CardBlock
} from "@webx/forms"

import "./stylesheet.scss"

function NotFound() {
    const toolkit = useToolKit()

    function MoveToRootButton() {

        function onClick() {
            toolkit.app.goTo(toolkit.app.path)
        }

        return <Button 
                title="Вернуться на главную"
                onClick={onClick}
        />
    }

    return <div className="not-found">
        <CardBlock>
            <h1>
                Ошиблись адресом?
            </h1>
            <p>
                Страница не найдена, либо она не существует.
            </p>
            <p>
                Попробуйте вернуться на главную страницу.
            </p>
            <MoveToRootButton/>
        </CardBlock>
    </div>
}

export default NotFound