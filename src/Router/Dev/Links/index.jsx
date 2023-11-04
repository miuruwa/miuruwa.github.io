import { nanoid } from "nanoid";
import LinkButton from "./LinkButton";
import linksData from "./linksData";

import "./stylesheet.scss"

export default function () {
    return <div className="homepage-links">
        {linksData.map(
            item => <LinkButton key={nanoid()} {...item} />
        )}
    </div>
}
