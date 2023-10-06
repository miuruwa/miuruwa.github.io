import {
    ArrowBackIcon
} from 'icons/settings/menu/header'

import {
    Button
} from "@webx/forms"

import {
    useToolKit
} from "@webx/toolkit"

function BackButtonMobile() {
    const toolkit = useToolKit()

    const returnToMenu = () => {
        toolkit.pages.repos.number = 0
    }

    return <Button 
            icon={<ArrowBackIcon/>}
            theme="white"
            onClick={returnToMenu}
    />
}

export default function Headline({
  title
}) {
    const toolkit = useToolKit()
    
    return <div className="repos-headline">
        {
            toolkit.settings.windowWidth < 768 ? <BackButtonMobile /> : <></>
        }
        { title }
    </div>
}
