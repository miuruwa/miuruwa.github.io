import { useToolKit } from "@webx/toolkit"
import { Button } from "@webx/forms"
import BackIcon from "@webx/icons/BackIcon"

import { usePages } from "../usePages"


export default function () {
    const toolkit = useToolKit()
    const [_, setPage] = usePages()

    const IS_NOT_MOBILE = toolkit.settings.windowWidth >= 768

    if (IS_NOT_MOBILE) {
        return <></>
    }

    const buttonProps = {
        icon: <BackIcon />,
        theme: "transparent",
        title: "Вернуться в меню",
        onClick: () => setPage("menu")
    }

    return <Button {...buttonProps} />
}
