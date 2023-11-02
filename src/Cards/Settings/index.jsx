import { 
    useToolKit
} from "@webx/toolkit"

import { 
    CardBlock, Button
} from "@webx/forms"

import CacheApp from "./CacheApp"
import UpdateCacheButton from "./UpdateCacheButton"
import LanguageDropdown from "./LanguageDropdown"
import languages from "./languages"

import "./stylesheet.scss"


function OptionsBlock () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    const props = {
        theme: "white",
        title: actualLanguage.close,
        onClick: () => {
            toolkit.card.return()
        }
    }

    return <div className="card-options">
        <Button {...props} />
    </div>
}

export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <form className="settings-card">
        <h3>
            {actualLanguage.title}
        </h3>
        <CardBlock>
            <div className="settings-card-content">
                <h6>
                    {actualLanguage.labels[0]}
                </h6>
                <label>
                    <p>
                        {actualLanguage.language}
                    </p>
                    <LanguageDropdown />
                </label>
                <label>
                    <p>
                        {actualLanguage.offline.tumbler}
                    </p>
                    <CacheApp />
                </label>
                <label>
                    <p>
                        <></>
                    </p>
                    <UpdateCacheButton />
                </label>
            </div>
            <OptionsBlock />
        </CardBlock>
    </form>
}