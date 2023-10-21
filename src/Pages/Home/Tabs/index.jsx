
import LinkButton from "./LinkButton"
import "./stylesheet.scss"
import linksData from "./linksData"

function Tabs () {
    return <div className="homepage-content">
        <h6>
            Домашняя страница
        </h6>
        <div className="homepage-links">
            {
                linksData.map(LinkButton)
            }
        </div>
    </div>
}

export default Tabs