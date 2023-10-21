import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import {
    insertUrlParameter
} from "~/utils/URLParameters"


function MenuButton({icon, title, id}) {
    const toolkit = useToolKit()

    const buttonProps = {
        theme: "transparent",
        icon: icon,
        style: { width: "100%" },
        title: title,
        onClick: () => {
            toolkit.pages.repos.id = id
            insertUrlParameter("id", id)
        }
    }

    return <Button {...buttonProps} />
}

export default MenuButton