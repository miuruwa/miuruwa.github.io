import "./stylesheet.scss"
import Illustration from "~/media/dev.png"
import LinkButton from "./Button"
import {
    useEffect
} from "react"

function Description () {
    return <h6>
        20 лет, Екатеринбург
        <br />
        Художник & Программист
    </h6>
}

function DevArt () {
    return <img src={Illustration} />
}

function LinksTab () {
    return <>
        <h6>
            мои соцсети
        </h6>
        <div className="links-block">
            <LinkButton link="https://github.com/kensoi">
                Github
            </LinkButton>
            <LinkButton link="https://vk.com/miuruwa">
                ВКонтакте
            </LinkButton>
            <LinkButton link="https://t.me/miuruwa">
                Telegram
            </LinkButton>
        </div>
    </>
}

function Main () {
    useEffect(
        () => {
            document.title = "о разработчике / miuruwa"
        }, []
    )
    return <>
        <div className="links-wrapper">
            <Description />
            <DevArt />
            <LinksTab />
        </div>
    </>
}

export default Main