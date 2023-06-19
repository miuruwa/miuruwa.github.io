import {
    useToolKit
} from "@webx-ui/toolkit"

import {
    Button
} from "@webx-ui/forms"

import {
    SettingsIcon
} from "icons/settings/menu"

import {
    WebXIcon
} from "icons/repos/menu"

export default function Header() {
    const toolkit = useToolKit()

    const buttonAction = () => {
        toolkit.app.goTo(toolkit.app.path + "/settings/")
    }

    return <div className="repos-menu-headline repos-block">
        <div className="icon-logo">
            <WebXIcon />
        </div>
        <div className="icon-title">
            kensoidev
        </div>
        <Button
            theme="white" icon={<SettingsIcon />}
            onClick={buttonAction} />
    </div>
}
