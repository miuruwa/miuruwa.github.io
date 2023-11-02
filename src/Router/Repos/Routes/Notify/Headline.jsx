import {
    useToolKit
} from "@webx/toolkit"

import NotesIcon from "@webx/icons/NotesIcon"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    
    return <div className="repo-headline">
        <NotesIcon />
        <div>
            <h1>
                {languages[toolkit.settings.language].title}
            </h1>
        </div>
    </div>
}
