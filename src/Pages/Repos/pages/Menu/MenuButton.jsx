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

export default function MenuButton({
    icon, title, page
}) {
    const toolkit = useToolKit()

    const menuAction = () => {
        toolkit.pages.repos.id = page
        insertUrlParam("id", page)
    }

    return <Button
        theme="transparent"
        icon={icon}
        style={{ width: "100%" }}
        title={title}
        onClick={menuAction} />
}
