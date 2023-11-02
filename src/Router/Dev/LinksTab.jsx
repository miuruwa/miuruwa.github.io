import {
    nanoid
} from "nanoid"

import {
    useToolKit
} from "@webx/toolkit"

import Button from "./Button"
import buttonData from "./buttonData"
import languages from "./languages"


export default function () {
    const toolkit = useToolKit()
    return <>
        <h6>
            {languages[toolkit.settings.language].social}
        </h6>
        <div className="links-block">
            {
                buttonData.map(
                    item => <Button key={nanoid()} {...item} />
                )
            }
        </div>
    </>
}
