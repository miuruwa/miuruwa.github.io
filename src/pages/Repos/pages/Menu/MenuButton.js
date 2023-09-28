import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

export default function MenuButton({
    icon, title, page
}) {
    const toolkit = useToolKit()

    const menuAction = () => {
        toolkit.pages.repos.number = page
    }

    return <Button
        theme="transparent"
        icon={icon}
        style={{ width: "100%" }}
        title={title}
        onClick={menuAction} />
}
