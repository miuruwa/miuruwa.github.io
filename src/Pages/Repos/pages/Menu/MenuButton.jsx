import {
    useToolKit
} from "@webx/toolkit"

import {
    Button
} from "@webx/forms"

import {
    insertUrlParameter
} from "~/utils/URLParameters"


export default function ({icon, title, repo_id}) {
    const toolkit = useToolKit()

    const buttonProps = {
        theme: "transparent",
        icon: icon,
        style: { width: "100%" },
        title: title,
        onClick: () => {
            toolkit.pages.repos.id = repo_id
            insertUrlParameter("id", repo_id)
        }
    }

    return <Button {...buttonProps} />
}