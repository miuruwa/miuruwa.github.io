import { nanoid } from "nanoid"
import LinkButton from "../../components/LinkButton"


const routes = [
    {
        label: "Сообщество",
        link: "https://vk.com/marcelbot"
    },
    {
        label: "Исходный код",
        link: "https://github.com/kensoi/marcelbot"
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
