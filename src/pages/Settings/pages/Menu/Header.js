import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import {
    ArrowBackIcon
} from "icons/settings/menu/header"

export default function Header() {
    const toolkit = useToolKit()

    const buttonAction = () => {
        toolkit.app.goTo(window.location.origin)
    }

    return <div className="settings-headline settings-block">
        <Button
            theme="transparent" icon={<ArrowBackIcon />}
            onClick={buttonAction} />
        Настройки
    </div>
}
