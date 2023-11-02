import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import UpdateCacheIcon from "@webx/icons/UpdateCacheIcon"
import * as serviceWorkerRegistration from '~/serviceWorkerRegistration'
import EnableOfflineCard from "./EnableOfflineCard"
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    const buttonProps = {
        className: "settings-block",
        icon: <UpdateCacheIcon />,
        theme: "white",
        title: actualLanguage.offline.reset,
        onClick: () => {
            if (!toolkit.settings.cacheApp) {
                return toolkit.card.show(<EnableOfflineCard />)
            }
    
            serviceWorkerRegistration.unregister()
            window.location.pathname = "/"
        }
    }

    return <Button {...buttonProps} />
}