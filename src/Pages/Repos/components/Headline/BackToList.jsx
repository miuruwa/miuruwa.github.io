import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import BackIcon from '@webx/icons/BackIcon'


function removeUrlParameter(paramKey) {
    const url = window.location.href
    var r = new URL(url)
    r.searchParams.delete(paramKey)
    const newUrl = r.href
    window.history.pushState({ path: newUrl }, '', newUrl)
}

function BackToList() {
    const toolkit = useToolKit();

    const buttonProps = {
        icon: <BackIcon />,
        title: "Назад в меню",
        theme: "transparent",
        onClick: () => {
            removeUrlParameter()
            toolkit.pages.repos.id = ""
        }
    }

    return <Button {...buttonProps} />;
}

export default BackToList