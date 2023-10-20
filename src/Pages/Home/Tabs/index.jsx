import LinkButton from "./LinkButton"
import "./stylesheet.scss"

function Tabs () {
    return <div className="homepage-content">
        <h6>
            Домашняя страница
        </h6>
        <div className="homepage-links">
            <LinkButton title="проекты" path="/repos" />
            <LinkButton title="разработчик" path="/dev" />
        </div>
    </div>
}

export default Tabs