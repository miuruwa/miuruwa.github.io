import {
    useToolKit
} from "@shared/toolkit"

import NotFoundIllustration from "@blocks/NotFoundIllustration"
import NotFoundMessage from "@blocks/NotFoundMessage"
import languages from "@shared/languages"

import "./stylesheet.scss"
import Meta from "@layout/Meta"

const NotFound = () => {
    const toolkit = useToolKit()

    const pageData = languages[toolkit.settings.language].notFound

    return <Meta title={pageData.title}>
        <div className="not-found">
            <NotFoundIllustration />
            <NotFoundMessage />
        </div>
    </Meta>
}

export default NotFound;
