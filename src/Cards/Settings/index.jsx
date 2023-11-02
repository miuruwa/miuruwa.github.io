import { 
    useToolKit
} from "@webx/toolkit"

import { 
    CardBlock
} from "@webx/forms"

import CacheApp from "./CacheApp"
import UpdateCacheButton from "./UpdateCacheButton"
import LanguageDropdown from "./LanguageDropdown"
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    const actualLanguage = languages[toolkit.settings.language]

    return <form className="card">
        <h6>
            {actualLanguage.title}
        </h6>
        <CardBlock>
            <label>
                {actualLanguage.offline.tumbler}
                <CacheApp />
            </label>
            <label>
                {actualLanguage.language}
                <LanguageDropdown />
            </label>
        </CardBlock>
        <UpdateCacheButton />
    </form>
}