import {
    useToolKit
} from "@webx/toolkit"

import Link from "./Link"


export default function (item) {
    const toolkit = useToolKit()

    return <p>
        {item.title[toolkit.settings.language]} <Link>
            {item.link}
        </Link>
    </p>
}