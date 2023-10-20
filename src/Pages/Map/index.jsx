import {
    useEffect
} from "react"

import "./stylesheet.scss"
import data from "./mapData.json"

function Link ({children}) {
    return <a href={children}>
        {children}
    </a>
}

function Section (item) {
    return <p>
        {
            item.title
        } <Link>
            {
                item.link
            }
        </Link>
    </p>
}

function Map () {
    useEffect(
        () => {
            document.title = "навигатор / miuruwa"
        }, []
    )

    return <div className="map">
        <h6>
            карта сайта
        </h6>
        {
            data.map(Section)
        }
    </div>
}

export default Map