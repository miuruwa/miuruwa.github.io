import { CardBlock } from "@webx/forms"

export default function ({ page }) {
    return <CardBlock className="status">
        <p>
            Actual page
        </p>
        <code>
            {page}
        </code>
    </CardBlock>
}
