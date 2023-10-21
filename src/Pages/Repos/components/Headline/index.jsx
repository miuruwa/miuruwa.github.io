import {
    useToolKit
} from "@webx/toolkit"

import BackToList from "./BackToList"
import "./stylesheet.scss"


export default function ({title}) {
    const toolkit = useToolKit()
    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    return <div className='repo-headline'>
        <BackToList IS_DESKTOP={IS_DESKTOP} />
        <h1>
            { title }
        </h1>
    </div>
}