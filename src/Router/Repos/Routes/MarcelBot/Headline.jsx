import {
    useToolKit
} from "@webx/toolkit"

import BotIcon from "@webx/icons/BotIcon"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    
    return <div className="repo-headline">
        <BotIcon />
        <div>
            <h1>
                {languages[toolkit.settings.language].title}
            </h1>
        </div>
    </div>
}
