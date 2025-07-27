import { nanoid } from "nanoid"

import data from "@layout/Header/Navigation/data"
import Button from "./Button"


export default function () {
    return data.map(
        item => <Button key={nanoid()} {...item} />
    )
}
