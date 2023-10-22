function removeUrlParameter(paramKey) {
    const url = window.location.href
    var r = new URL(url)
    r.searchParams.delete(paramKey)
    const newUrl = r.href
    window.history.pushState({ path: newUrl }, '', newUrl)
}

function insertUrlParameter(key, value) {
    removeUrlParameter(key)

    if (history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
        window.history.pushState({path: newurl}, '', newurl);
    }
}

function getUrlParameter(paramKey) {
    const url = window.location.href
    const r = new URL(url)

    const value = r.searchParams.get(paramKey) || ""

    return value
}

export {
    removeUrlParameter,
    insertUrlParameter,
    getUrlParameter
}