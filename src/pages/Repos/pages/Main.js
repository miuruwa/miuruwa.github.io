import {
    CardBlock
} from "@webx-ui/forms"

import Headline from "../components/Headline"
import LinkButton from "../components/LinkButton"

export default function Main () {
    return <div className="repos-wrapper">
        <Headline title="Главная" />
        <CardBlock className="repos-page options">
            <div className="repo-description">
                Здесь я не придумал чё написать {":)"}
            </div>
            <div className="repo-description">
                Могу написать что делаю какие-то штуки, которыми мог бы пользоваться я сам (и я этим пользуюсь), и которыми могли бы пользоваться люди из моего окружения.
            </div>
            <div className="repo-description">
                Работаю с ReactJS, Python
            </div>
        </CardBlock>
        <CardBlock className="repos-page options">
            <div className="options-button-list">
                <LinkButton title="Github" link="https://github.com/kensoi" />
                <LinkButton title="VK" link="https://vk.com/kensoi" />
            </div>
        </CardBlock>
    </div>
}