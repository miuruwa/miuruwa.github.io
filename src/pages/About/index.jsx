import "./stylesheet.scss"
import Illustration from "./Illustration.png"
import LinkButton from "./Button"
import {
    useEffect
} from "react"

function Main () {
    useEffect(
        () => {
            document.title = "about / kensoi"
        }, []
    )
    return <>
        <div className="links-wrapper">
            <h6>
                20 лет, Екатеринбург
                <br />
                Художник & Программист
            </h6>
            <h6>
                мои соцсети
            </h6>
            <div className="links-block">
                <LinkButton link="https://github.com/kensoi">
                    Github
                </LinkButton>
                <LinkButton link="https://vk.com/kensoi">
                    ВКонтакте
                </LinkButton>
                <LinkButton link="https://t.me/kensoidev">
                    Telegram
                </LinkButton>
            </div>
        </div>
    </>
}

export default Main