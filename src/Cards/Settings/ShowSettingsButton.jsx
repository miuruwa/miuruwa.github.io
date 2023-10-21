import {
    useToolKit
} from "@webx/toolkit"

import { 
    Button
} from "@webx/forms"


export default function () {
    const toolkit = useToolKit()

    const buttonProps = {
        title: "OK",
        onClick: () => toolkit.card.showPrevious()
    }

    return <Button {...buttonProps} />
}