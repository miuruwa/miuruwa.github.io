import {
    useToolKit
} from "@shared/toolkit"

import {
    Button
} from "@ui"

import UpdateCacheIcon from "@icons/UpdateCacheIcon"
import * as serviceWorkerRegistration from '~/serviceWorkerRegistration'
import EnableOfflineCard from "@blocks/EnableOfflineCard"
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