import { 
    useState
} from "react"

import { 
    useToolKit
} from "@webx/toolkit"

import { 
    CardBlock
} from "@webx/forms"

import CacheApp from "./CacheApp"
import UpdateCacheButton from "./UpdateCacheButton"

function SettingsСard() {
    return <form className="cart-calc-message">
        <h6>
            Настройки
        </h6>
        <CardBlock>
            <label>
                Запускать offline
                <CacheApp />
            </label>
        </CardBlock>
        <UpdateCacheButton />
    </form>
}

export default SettingsСard