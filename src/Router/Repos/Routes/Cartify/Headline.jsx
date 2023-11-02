import {
    useToolKit
} from "@webx/toolkit"

import CartifyIcon from "@webx/icons/CartifyIcon"

import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    
    return <div className="repo-headline">
        <CartifyIcon />
        <div>
            <h1>
                {languages[toolkit.settings.language].title}
            </h1>
        </div>
    </div>
}
