import { nanoid } from "nanoid"

import data from "~/Header/Navigation/data"
import Button from "./Button"


export default function () {
    return data.map(
        item => <Button key={nanoid()} {...item} />
    )
}
