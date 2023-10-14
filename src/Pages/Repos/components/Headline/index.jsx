import {
    useToolKit
} from "@webx/toolkit"

import BackToList from "./BackToList"
import "./stylesheet.scss"


function Headline({
  title
}) {
    const toolkit = useToolKit()

    const IS_DESKTOP = toolkit.settings.windowWidth >= 768

    return IS_DESKTOP ? <>
        <div className='repo-headline'>
            <h1>
                { title }
            </h1>
        </div>
    </> : <>
        <BackToList />
        <div className='repo-headline'>
            <h1>
                { title }
            </h1>
        </div>
    </>
}

export default Headline