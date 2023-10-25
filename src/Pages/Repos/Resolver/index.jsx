import { usePages } from "../usePages"

import routes from "../Routes"
import BackToMenu from "./BackToMenu"


export default function () {
    const [page, _] = usePages()

    const pages = [].concat(...routes)
    const element = pages.find(item => item.repoID == page)

    return <div>
        <BackToMenu />
        {element.content}
    </div>
}
