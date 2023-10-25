import { CardBlock } from "@webx/forms"

import "./feature.scss"


export default function ({ children }) {
    return <CardBlock className="marcel-feature">
        <p>
            {children}
        </p>
    </CardBlock>
}
