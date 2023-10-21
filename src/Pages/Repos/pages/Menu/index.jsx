import {
    nanoid
} from "nanoid"

import {
    ButtonBlock
} from "@webx/forms"

import Header from "./Header"
import MenuButton from "./MenuButton"
import menuData from "./menuData"


export default function () {
    return <div className="repos-menu">
        <Header />
        {
            menuData.map(
                block => <ButtonBlock className="repos-block" key={nanoid()}>
                    {
                        block.map(
                            item => <MenuButton key={nanoid()} {...item} />
                        )
                    }
                </ButtonBlock>
            )
        }
    </div>
}