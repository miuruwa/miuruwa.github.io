import {
    nanoid
} from "nanoid"

import Button from "./Button"
import buttonData from "./buttonData"


export default function () {
    return <>
        <h6>
            мои соцсети
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
