import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"


function removeUrlParameter(paramKey) {
    const url = window.location.href
    var r = new URL(url)
    r.searchParams.delete(paramKey)
    const newUrl = r.href
    window.history.pushState({ path: newUrl }, '', newUrl)
}

function insertUrlParam(key, value) {
    removeUrlParameter(key)

    if (history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
        window.history.pushState({path: newurl}, '', newurl);
    }
}

function MenuButton({icon, title, id}) {
    const toolkit = useToolKit()

    const buttonProps = {
        theme: "transparent",
        icon: icon,
        style: { width: "100%" },
        title: title,
        onClick: () => {
            toolkit.pages.repos.id = id
            insertUrlParam("id", id)
        }
    }

    return <Button {...buttonProps} />
}

export default MenuButton