import {
    CardBlock
} from "@webx/forms"

import LinkButton from "../Repos/components/LinkButton"

function Main () {
    return <div className="repos-wrapper">
        <h1>
            Главная
        </h1>
        <CardBlock className="repos-page options">
            <p>
                Здесь я не придумал чё написать {":)"}
            </p>
            <p>
                Могу написать что делаю какие-то штуки, которыми мог бы пользоваться я сам (и я этим пользуюсь), и которыми могли бы пользоваться люди из моего окружения.
            </p>
            <p>
                Работаю с ReactJS, Python
            </p>
        </CardBlock>
        <h6>
            Полезные ссылки
        </h6>
        <CardBlock className="repos-page options">
            <p>
                <LinkButton title="Github" link="https://github.com/kensoi" />
                <LinkButton title="VK" link="https://vk.com/kensoi" />
            </p>
        </CardBlock>
    </div>
}

export default Main