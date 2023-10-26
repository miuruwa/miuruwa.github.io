import { nanoid } from "nanoid"
import LinkButton from "../../components/LinkButton"


const routes = [
    {
        label: "Исходный код",
        link: "https://github.com/vkbotkit/vkbotkit"
    },
    {
        label: "Шаблон",
        link: "https://github.com/vkbotkit/template"
    },
    {
        label: "Примеры",
        link: "https://github.com/vkbotkit/examples"
    }
]

export default function () {
    return <>
        <h6>
            Полезные ссылки
        </h6>
        <div className="options">
            {
                routes.map(item => <LinkButton key={nanoid()} {...item} />)
            }
        </div>
    </>
}