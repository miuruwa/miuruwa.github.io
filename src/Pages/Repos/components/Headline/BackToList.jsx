import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import BackIcon from '@webx/icons/BackIcon'

import {
    removeUrlParameter
} from "~/utils/URLParameters"


export default function({IS_DESKTOP}) {
    const toolkit = useToolKit()

    const buttonProps = {
        icon: <BackIcon />,
        title: "Назад в меню",
        theme: "transparent",
        onClick: () => {
            removeUrlParameter()
            toolkit.pages.repos.id = ""
        }
    }

    return IS_DESKTOP ? <></> : <Button {...buttonProps} />
}