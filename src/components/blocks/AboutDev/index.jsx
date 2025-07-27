import {
    useToolKit
} from "@shared/toolkit"

import languageData from "@shared/languages"

const AboutDev = () => {
    const toolkit = useToolKit()

    const pageData = languageData[toolkit.settings.language].about

    return <div>
        <h1>
            {pageData.title}
        </h1>
        <p>
            {pageData.description}
        </p>
    </div>
}

export default AboutDev;
