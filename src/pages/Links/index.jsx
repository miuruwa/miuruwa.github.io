import "./stylesheet.scss"
import LinkButton from "./Button"

function Main () {
    return <div className="links-wrapper">
        <h1>
            Ссылки
        </h1>
        <LinkButton link="https://github.com/kensoi">
            Github
        </LinkButton>
        <LinkButton link="https://vk.com/miuruwa">
            ВКонтакте
        </LinkButton>
        <LinkButton link="https://t.me/miuruwa">
            Telegram
        </LinkButton>
        <LinkButton link="https://x.com/miuruwa_">
            X (бывш. Твиттер)
        </LinkButton>
        <LinkButton link="https://youtube.com/@miruruwa">
            Youtube
        </LinkButton>
    </div>
}

export default Main